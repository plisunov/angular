import {initialUserState, IUserState} from '../states/user.state';
import {EUserActions, UserActions} from '../actions/user.actions';


export const userReducer = (state = initialUserState, action: UserActions): IUserState => {
  switch (action.type) {
    case EUserActions.UserDataLoaded:
      return {...state,
        token: action.user.fakeToken,
        user: {firstName: action.user.name.first, lastName: action.user.name.last, id: action.user.id}};
    case EUserActions.UserFromLocalStorageLoaded:
      return {...state,
        token: action.userState.token,
        user: {firstName: action.userState.user.firstName, lastName: action.userState.user.lastName, id: action.userState.user.id}};
    default:
      return state;
  }
};
