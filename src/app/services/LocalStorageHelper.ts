import {UserDto} from '@iuliacornea/gardener-api';


export class LocalStorageHelper {

  private static USER_KEY = 'user_key';

  static storeUser(user: UserDto): void {
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }

  static retrieveUser(): UserDto {
    return localStorage.getItem(this.USER_KEY) && JSON.parse(localStorage.getItem(this.USER_KEY));
  }

  static removeUser(): void {
    localStorage.setItem(this.USER_KEY, '');
  }
}
