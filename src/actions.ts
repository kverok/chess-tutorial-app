// Constants
import {
  ACTION_SIGN_IN,
  ACTION_SIGN_UP,
  ACTION_SIGN_OUT,
  ACTION_FETCH_USER_DATA,
  ACTION_SUBMIT_USER_DATA,
  ACTION_PUT_USER_DATA,
  ACTION_CLEAR_USER_DATA,
  ACTION_TOGGLE_USER_DATA_LOADING,
  ACTION_PUT_AUTH_REQUEST_ERROR,
  ACTION_CLEAR_AUTH_REQUEST_ERRORS,
  ACTION_PUT_NOTIFICATION,
  ACTION_CLEAR_NOTIFICATION,
  ACTION_CREATE_LESSON,
  ACTION_DISCARD_OPERATION,
  ACTION_UPDATE_OPERATION_DATA,
  PROP_ACTION_TYPE,
  PROP_ACTION_PAYLOAD,
} from './constants';

// Types
import {
  SignInAction,
  SignInActionPayload,
  SignUpAction,
  SignUpActionPayload,
  SignOutAction,
  FetchUserDataAction,
  FetchUserDataActionPayload,
  SubmitUserDataAction,
  PutUserDataAction,
  UserData,
  ClearUserDataAction,
  ToggleUserDataLoadingAction,
  PutAuthRequestErrorAction,
  PutAuthRequestErrorActionPayload,
  ClearAuthRequestErrorsAction,
  FirebaseError,
  AuthErrorGroup,
  PutNotificationAction,
  PutNotificationActionPayload,
  ClearNotificationAction,
  CreateLessonAction,
  DiscardOperationAction,
  UpdateOperationDataAction,
  UpdateOperationDataActionPayload,
} from './types';

export const onSignIn = (signInData: SignInActionPayload): SignInAction => {
  return {
    [PROP_ACTION_TYPE]: ACTION_SIGN_IN,
    [PROP_ACTION_PAYLOAD]: signInData,
  };
};

export const onSignUp = (signUpData: SignUpActionPayload): SignUpAction => {
  return {
    [PROP_ACTION_TYPE]: ACTION_SIGN_UP,
    [PROP_ACTION_PAYLOAD]: signUpData,
  };
};

export const onSignOut = (): SignOutAction => {
  return {
    [PROP_ACTION_TYPE]: ACTION_SIGN_OUT,
    [PROP_ACTION_PAYLOAD]: undefined,
  };
};

export const onFetchUserData = (
  userData: FetchUserDataActionPayload
): FetchUserDataAction => {
  return {
    [PROP_ACTION_TYPE]: ACTION_FETCH_USER_DATA,
    [PROP_ACTION_PAYLOAD]: userData,
  };
};

export const onSubmitUserData = (userData: UserData): SubmitUserDataAction => {
  return {
    [PROP_ACTION_TYPE]: ACTION_SUBMIT_USER_DATA,
    [PROP_ACTION_PAYLOAD]: userData,
  };
};

export const onPutUserData = (userData: UserData): PutUserDataAction => {
  return {
    [PROP_ACTION_TYPE]: ACTION_PUT_USER_DATA,
    [PROP_ACTION_PAYLOAD]: userData,
  };
};

export const onClearUserData = (): ClearUserDataAction => {
  return {
    [PROP_ACTION_TYPE]: ACTION_CLEAR_USER_DATA,
    [PROP_ACTION_PAYLOAD]: undefined,
  };
};

export const onToggleUserDataLoading = (): ToggleUserDataLoadingAction => {
  return {
    [PROP_ACTION_TYPE]: ACTION_TOGGLE_USER_DATA_LOADING,
    [PROP_ACTION_PAYLOAD]: undefined,
  };
};

export const onPutAuthRequestError = (
  errorGroup: AuthErrorGroup,
  error: FirebaseError
): PutAuthRequestErrorAction => {
  return {
    [PROP_ACTION_TYPE]: ACTION_PUT_AUTH_REQUEST_ERROR,
    [PROP_ACTION_PAYLOAD]: {
      [errorGroup]: error,
    } as PutAuthRequestErrorActionPayload,
  };
};

export const onClearAuthRequestErrors = (): ClearAuthRequestErrorsAction => {
  return {
    [PROP_ACTION_TYPE]: ACTION_CLEAR_AUTH_REQUEST_ERRORS,
    [PROP_ACTION_PAYLOAD]: undefined,
  };
};

export const onPutNotification = (
  notificationData: PutNotificationActionPayload
): PutNotificationAction => {
  return {
    [PROP_ACTION_TYPE]: ACTION_PUT_NOTIFICATION,
    [PROP_ACTION_PAYLOAD]: notificationData,
  };
};

export const onClearNotification = (): ClearNotificationAction => {
  return {
    [PROP_ACTION_TYPE]: ACTION_CLEAR_NOTIFICATION,
    [PROP_ACTION_PAYLOAD]: undefined,
  };
};

export const onCreateLesson = (currentUserId: string): CreateLessonAction => {
  return {
    [PROP_ACTION_TYPE]: ACTION_CREATE_LESSON,
    [PROP_ACTION_PAYLOAD]: currentUserId,
  };
};

export const onDiscardOperation = (): DiscardOperationAction => {
  return {
    [PROP_ACTION_TYPE]: ACTION_DISCARD_OPERATION,
    [PROP_ACTION_PAYLOAD]: undefined,
  };
};

export const onUpdateOperationData = (
  incomingUpdates: UpdateOperationDataActionPayload
): UpdateOperationDataAction => {
  return {
    [PROP_ACTION_TYPE]: ACTION_UPDATE_OPERATION_DATA,
    [PROP_ACTION_PAYLOAD]: incomingUpdates,
  };
};
