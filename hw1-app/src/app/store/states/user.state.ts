import {IUser} from '../../hwork1/model/user';

export interface IUserState {
  user: IUser;
  token: string;
}
export interface IUserLoginPayload {
  login: string;
  password: string;
}

export const initialUserState: IUserState = {
  user: null,
  token: null,
};
