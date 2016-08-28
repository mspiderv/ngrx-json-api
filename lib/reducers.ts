import { Action, ActionReducer } from '@ngrx/store';

import { JsonApiActions } from './actions';
import {
  Query,
  Document,
  Resource,
  NgrxJsonApiStore
} from './interfaces';

import { updateOrInsertResource } from './utils';

export const updateStoreReducer = (state: NgrxJsonApiStore,
    payload: Document): NgrxJsonApiStore => {

    let data = <Array<Resource> | Resource>_.get(payload, 'data');

    if (_.isUndefined(data)) {
        return state;
    }

    data = _.isArray(data) ? data : [data]

    let included = <Array<Resource>>_.get(payload, 'included');

    if (!_.isUndefined(included)) {
        data = [...data, ...included];
    }

    return <NgrxJsonApiStore>_.reduce(
        data, (result: NgrxJsonApiStore,
          resource: Resource) => {
            // let resourcePath: string = getResourcePath(
            //   result.resourcesDefinitions, resource.type);
            // Extremely ugly, needs refactoring!
            let newPartialState = { data: {} };
            // newPartialState.data[resourcePath] = { data: {} } ;
            newPartialState.data = updateOrInsertResource(
              result.data, resource);
              // result.data[resourcePath].data = updateOrInsertResource(
                // result.data[resourcePath].data, resource);
            return <NgrxJsonApiStore>_.merge({}, result, newPartialState);
        }, state);
};


export const StoreReducer: ActionReducer<any> =
  (state: NgrxJsonApiStore, action: Action) => {
    let newState;

    switch (action.type) {
      case JsonApiActions.API_CREATE_INIT:
        return Object.assign({}, state, { 'isCreating': true });

      case JsonApiActions.API_READ_INIT:
        return Object.assign({}, state, { 'isReading': true });

      case JsonApiActions.API_UPDATE_INIT:
        return Object.assign({}, state, { 'isUpdating': true });

      case JsonApiActions.API_DELETE_INIT:
        return Object.assign({}, state, { 'isDeleting': true });

      case JsonApiActions.API_CREATE_SUCCESS:
        newState = Object.assign({},
          state,
          updateStoreReducer(state, action.payload.data),
          { 'isCreating': false }
        );
        return newState;

      case JsonApiActions.API_READ_SUCCESS:
        newState = Object.assign({},
          state,
          updateStoreReducer(state, action.payload.data),
          { 'isReading': false }
        );
        return newState;

      case JsonApiActions.API_UPDATE_SUCCESS:
        newState = Object.assign(
          {},
          state,
          updateStoreReducer(state, action.payload.data),
          { 'isUpdating': false }
        );
        return newState;

      case JsonApiActions.API_DELETE_SUCCESS:
        newState = Object.assign({}, state, { 'isDeleting': false });
        return newState;

      case JsonApiActions.API_CREATE_FAIL:
        newState = Object.assign({}, state, { 'isCreating': false });
        return newState;

      case JsonApiActions.API_READ_FAIL:
        newState = Object.assign({}, state, { 'isReading': false });
        return newState;

      case JsonApiActions.API_UPDATE_FAIL:
        newState = Object.assign({}, state, { 'isUpdating': false });
        return newState;

      case JsonApiActions.API_DELETE_FAIL:
        newState = Object.assign({}, state, { 'isDeleting': false });
        return newState;

      default:
        return state;
    }
  };
