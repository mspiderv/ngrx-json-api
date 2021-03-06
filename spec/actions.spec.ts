import {
  async,
  inject,
  fakeAsync,
  TestBed
} from '@angular/core/testing';

import {
  NgrxJsonApiActionTypes,
  ApiPostInitAction,
  ApiPostSuccessAction,
  ApiPostFailAction,
  ApiPatchInitAction,
  ApiPatchSuccessAction,
  ApiPatchFailAction,
  ApiGetInitAction,
  ApiGetSuccessAction,
  ApiGetFailAction,
  ApiDeleteInitAction,
  ApiDeleteSuccessAction,
  ApiDeleteFailAction,
  ApiApplyInitAction,
  ApiApplySuccessAction,
  ApiApplyFailAction,
  ApiRollbackAction,
  LocalQueryInitAction,
  LocalQuerySuccessAction,
  DeleteStoreResourceAction,
  PatchStoreResourceAction,
  PostStoreResourceAction,
  RemoveQueryAction,
  ClearStoreAction,
  CompactStoreAction,
  ApiQueryRefreshAction,
  ModifyStoreResourceErrorsAction

} from '../src/actions';

describe('Json Api Actions', () => {

  let actions;

  it('should have a fixed number of actions', () => {
    expect(Object.keys(NgrxJsonApiActionTypes).length).toEqual(27);
  });

  it('should have an api create init action', () => {
    expect(NgrxJsonApiActionTypes.API_POST_INIT).toBeDefined();
    expect(NgrxJsonApiActionTypes.API_POST_INIT).toBe('API_POST_INIT');
  });

  it('should have an api create sueccess action', () => {
    expect(NgrxJsonApiActionTypes.API_POST_SUCCESS).toBeDefined();
    expect(NgrxJsonApiActionTypes.API_POST_SUCCESS).toBe('API_POST_SUCCESS');
  });

  it('should have an api create fail action', () => {
    expect(NgrxJsonApiActionTypes.API_POST_FAIL).toBeDefined();
    expect(NgrxJsonApiActionTypes.API_POST_FAIL).toBe('API_POST_FAIL');
  });

  it('should have an api read init action', () => {
    expect(NgrxJsonApiActionTypes.API_GET_INIT).toBeDefined();
    expect(NgrxJsonApiActionTypes.API_GET_INIT).toBe('API_GET_INIT');
  });

  it('should have an api read sueccess action', () => {
    expect(NgrxJsonApiActionTypes.API_GET_SUCCESS).toBeDefined();
    expect(NgrxJsonApiActionTypes.API_GET_SUCCESS).toBe('API_GET_SUCCESS');
  });

  it('should have an api read fail action', () => {
    expect(NgrxJsonApiActionTypes.API_GET_FAIL).toBeDefined();
    expect(NgrxJsonApiActionTypes.API_GET_FAIL).toBe('API_GET_FAIL');
  });

  it('should have an api update init action', () => {
    expect(NgrxJsonApiActionTypes.API_PATCH_INIT).toBeDefined();
    expect(NgrxJsonApiActionTypes.API_PATCH_INIT).toBe('API_PATCH_INIT');
  });

  it('should have an api update success action', () => {
    expect(NgrxJsonApiActionTypes.API_PATCH_SUCCESS).toBeDefined();
    expect(NgrxJsonApiActionTypes.API_PATCH_SUCCESS).toBe('API_PATCH_SUCCESS');
  });

  it('should have an api update fail action', () => {
    expect(NgrxJsonApiActionTypes.API_PATCH_FAIL).toBeDefined();
    expect(NgrxJsonApiActionTypes.API_PATCH_FAIL).toBe('API_PATCH_FAIL');
  });

  it('should have an api delete init action', () => {
    expect(NgrxJsonApiActionTypes.API_DELETE_INIT).toBeDefined();
    expect(NgrxJsonApiActionTypes.API_DELETE_INIT).toBe('API_DELETE_INIT');
  });

  it('should have an api delete sueccess action', () => {
    expect(NgrxJsonApiActionTypes.API_DELETE_SUCCESS).toBeDefined();
    expect(NgrxJsonApiActionTypes.API_DELETE_SUCCESS).toBe('API_DELETE_SUCCESS');
  });

  it('should have an api delete fail action', () => {
    expect(NgrxJsonApiActionTypes.API_DELETE_FAIL).toBeDefined();
    expect(NgrxJsonApiActionTypes.API_DELETE_FAIL).toBe('API_DELETE_FAIL');
  });

  it('should have an api commit init action', () => {
    expect(NgrxJsonApiActionTypes.API_APPLY_INIT).toBeDefined();
    expect(NgrxJsonApiActionTypes.API_APPLY_INIT).toBe('API_APPLY_INIT');
  });

  it('should have an api commit success action', () => {
    expect(NgrxJsonApiActionTypes.API_APPLY_SUCCESS).toBeDefined();
    expect(NgrxJsonApiActionTypes.API_APPLY_SUCCESS).toBe('API_APPLY_SUCCESS');
  });

  it('should have an api commit fail action', () => {
    expect(NgrxJsonApiActionTypes.API_APPLY_FAIL).toBeDefined();
    expect(NgrxJsonApiActionTypes.API_APPLY_FAIL).toBe('API_APPLY_FAIL');
  });

  it('should have a query store init action', () => {
    expect(NgrxJsonApiActionTypes.LOCAL_QUERY_INIT).toBeDefined();
    expect(NgrxJsonApiActionTypes.LOCAL_QUERY_INIT).toBe('LOCAL_QUERY_INIT');
  });

  it('should have a query store success action', () => {
    expect(NgrxJsonApiActionTypes.LOCAL_QUERY_SUCCESS).toBeDefined();
    expect(NgrxJsonApiActionTypes.LOCAL_QUERY_SUCCESS).toBe('LOCAL_QUERY_SUCCESS');
  });

  it('should have a delete store resource action', () => {
    expect(NgrxJsonApiActionTypes.DELETE_STORE_RESOURCE).toBeDefined();
    expect(NgrxJsonApiActionTypes.DELETE_STORE_RESOURCE).toBe('DELETE_STORE_RESOURCE');
  });

  it('should have a patch store resource action', () => {
    expect(NgrxJsonApiActionTypes.PATCH_STORE_RESOURCE).toBeDefined();
    expect(NgrxJsonApiActionTypes.PATCH_STORE_RESOURCE).toBe('PATCH_STORE_RESOURCE');
  });

  it('should have a post store resource action', () => {
    expect(NgrxJsonApiActionTypes.POST_STORE_RESOURCE).toBeDefined();
    expect(NgrxJsonApiActionTypes.POST_STORE_RESOURCE).toBe('POST_STORE_RESOURCE');
  });

  it('should have a remove query action', () => {
    expect(NgrxJsonApiActionTypes.REMOVE_QUERY).toBeDefined();
    expect(NgrxJsonApiActionTypes.REMOVE_QUERY).toBe('REMOVE_QUERY');
  });

  it('should have a compact store action', () => {
    expect(NgrxJsonApiActionTypes.COMPACT_STORE).toBeDefined();
    expect(NgrxJsonApiActionTypes.COMPACT_STORE).toBe('COMPACT_STORE');
  });

  it('should have a clear store action', () => {
    expect(NgrxJsonApiActionTypes.CLEAR_STORE).toBeDefined();
    expect(NgrxJsonApiActionTypes.CLEAR_STORE).toBe('CLEAR_STORE');
  });

  it('should have a query refresh action', () => {
    expect(NgrxJsonApiActionTypes.API_QUERY_REFRESH).toBeDefined();
    expect(NgrxJsonApiActionTypes.API_QUERY_REFRESH).toBe('API_QUERY_REFRESH');
  });

  it('should have a set errors action', () => {
    expect(NgrxJsonApiActionTypes.MODIFY_STORE_RESOURCE_ERRORS).toBeDefined();
    expect(NgrxJsonApiActionTypes.MODIFY_STORE_RESOURCE_ERRORS).toBe('MODIFY_STORE_RESOURCE_ERRORS');
  });

  it('should generate an api create init action using apiCreateInit', () => {
    let action = new ApiPostInitAction({});
    expect(action.type).toEqual(NgrxJsonApiActionTypes.API_POST_INIT);
    expect(action.payload).toEqual({});
  });

  it('should generate an api create sueccess action using apiCreateSuccess', () => {
    let action = new ApiPostSuccessAction({});
    expect(action.type).toEqual(NgrxJsonApiActionTypes.API_POST_SUCCESS);
    expect(action.payload).toEqual({});
  });

  it('should generate an api create fail action using apiCreateFail', () => {
    let action = new ApiPostFailAction({});
    expect(action.type).toEqual(NgrxJsonApiActionTypes.API_POST_FAIL);
    expect(action.payload).toEqual({});
  });

  it('should generate an api read init action using apiReadInit', () => {
    let action = new ApiGetInitAction({});
    expect(action.type).toEqual(NgrxJsonApiActionTypes.API_GET_INIT);
    expect(action.payload).toEqual({});
  });

  it('should generate an api read success action using apiReadSuccess', () => {
    let action = new ApiGetSuccessAction({});
    expect(action.type).toEqual(NgrxJsonApiActionTypes.API_GET_SUCCESS);
    expect(action.payload).toEqual({});
  });

  it('should generate an api read fail action using apiReadFail', () => {
    let action = new ApiGetFailAction({});
    expect(action.type).toEqual(NgrxJsonApiActionTypes.API_GET_FAIL);
    expect(action.payload).toEqual({});
  });

  it('should generate an api update init action using apiUpdateInit', () => {
    let action = new ApiPatchInitAction({});
    expect(action.type).toEqual(NgrxJsonApiActionTypes.API_PATCH_INIT);
    expect(action.payload).toEqual({});
  });

  it('should generate an update success action using apiUpdateSuccess', () => {
    let action = new ApiPatchSuccessAction({});
    expect(action.type).toEqual(NgrxJsonApiActionTypes.API_PATCH_SUCCESS);
    expect(action.payload).toEqual({});
  });

  it('should generate an update fail action using apiUpdateFail', () => {
    let action = new ApiPatchFailAction({});
    expect(action.type).toEqual(NgrxJsonApiActionTypes.API_PATCH_FAIL);
    expect(action.payload).toEqual({});
  });

  it('should generate an api delete init action using apiDeleteInit', () => {
    let action = new ApiDeleteInitAction({});
    expect(action.type).toEqual(NgrxJsonApiActionTypes.API_DELETE_INIT);
    expect(action.payload).toEqual({});
  });

  it('should generate an api delete success action using apiDeleteSuccess', () => {
    let action = new ApiDeleteSuccessAction({});
    expect(action.type).toEqual(NgrxJsonApiActionTypes.API_DELETE_SUCCESS);
    expect(action.payload).toEqual({});
  });

  it('should generate an api delete fail action using apiDeleteFail', () => {
    let action = new ApiDeleteFailAction({});
    expect(action.type).toEqual(NgrxJsonApiActionTypes.API_DELETE_FAIL);
    expect(action.payload).toEqual({});
  });

  it('should generate an api commit init action using ApiApplyInit', () => {
    let action = new ApiApplyInitAction({});
    expect(action.type).toEqual(NgrxJsonApiActionTypes.API_APPLY_INIT);
    expect(action.payload).not.toBeDefined();
  });

  it('should generate an api commit success action using ApiApplySuccess', () => {
    let action = new ApiApplySuccessAction({});
    expect(action.type).toEqual(NgrxJsonApiActionTypes.API_APPLY_SUCCESS);
    expect(action.payload).toEqual({});
  });

  it('should generate an api commit fail action using ApiApplyFail', () => {
    let action = new ApiApplyFailAction({});
    expect(action.type).toEqual(NgrxJsonApiActionTypes.API_APPLY_FAIL);
    expect(action.payload).toEqual({});
  });

  it('should generate an api rollback action using ApiRollbackInit', () => {
    let action = new ApiRollbackAction();
    expect(action.type).toEqual(NgrxJsonApiActionTypes.API_ROLLBACK);
  });

  it('should generate a query store init action using LocalQueryInitAction', () => {
    let action = new LocalQueryInitAction({});
    expect(action.type).toEqual(NgrxJsonApiActionTypes.LOCAL_QUERY_INIT);
    expect(action.payload).toEqual({});
  });

  it('should generate a query store success action using LocalQuerySuccessAction', () => {
    let action = new LocalQuerySuccessAction({});
    expect(action.type).toEqual(NgrxJsonApiActionTypes.LOCAL_QUERY_SUCCESS);
    expect(action.payload).toEqual({});
  });

  it('should generate a delete store resource action using DeleteStoreResourceAction', () => {
    let action = new DeleteStoreResourceAction({});
    expect(action.type).toEqual(NgrxJsonApiActionTypes.DELETE_STORE_RESOURCE);
    expect(action.payload).toEqual({});
  });

  it('should generate a patch store resource action using PatchStoreResourceAction', () => {
    let action = new PatchStoreResourceAction({});
    expect(action.type).toEqual(NgrxJsonApiActionTypes.PATCH_STORE_RESOURCE);
    expect(action.payload).toEqual({});
  });

  it('should generate a post store resource action using PostStoreResourceAction', () => {
    let action = new PostStoreResourceAction({});
    expect(action.type).toEqual(NgrxJsonApiActionTypes.POST_STORE_RESOURCE);
    expect(action.payload).toEqual({});
  });

  it('should generate a delete store resource action using RemoveQueryAction', () => {
    let action = new RemoveQueryAction({});
    expect(action.type).toEqual(NgrxJsonApiActionTypes.REMOVE_QUERY);
    expect(action.payload).toEqual({});
  });

  it('should generate a modify errors action using ModifyStoreResourceErrorsAction', () => {
    let action = new ModifyStoreResourceErrorsAction({
      resourceId: null,
      errors: [],
      modificationType: 'SET'
    });
    expect(action.type).toEqual(NgrxJsonApiActionTypes.MODIFY_STORE_RESOURCE_ERRORS);
    expect(action.payload.modificationType).toEqual('SET');
  });

  it('should generate a compact store resource action using CompactStoreAction', () => {
    let action = new CompactStoreAction({});
    expect(action.type).toEqual(NgrxJsonApiActionTypes.COMPACT_STORE);
  });

  it('should generate a clear store resource action using ClearStoreAction', () => {
    let action = new ClearStoreAction({});
    expect(action.type).toEqual(NgrxJsonApiActionTypes.CLEAR_STORE);
  });

  it('should generate a refresh query action using ApiQueryRefreshAction', () => {
    let action = new ApiQueryRefreshAction({});
    expect(action.type).toEqual(NgrxJsonApiActionTypes.API_QUERY_REFRESH);
  });
});
