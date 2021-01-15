import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: Observable<User>;
  public userSubject: BehaviorSubject<User>;

  constructor(private commonService: CommonService) { 
    this.userSubject = new BehaviorSubject<User>(this.commonService.getUSerFromLocalStorage());
    this.user = this.userSubject.asObservable();
  }


  /**
   *
   * @type {User}
   * @memberof AuthService
   * Gets the current user logged in
   */
  public get userValue(): User {
    return this.userSubject.value;
  }


  /**
   *
   * @memberof AuthService
   * Updates if a new user is logged in and updates the localstorage
   */
  public set userValue(user) {
    this.commonService.setUserToLocalStorage(user);
    this.userSubject.next(user);
  }


  /**
   *
   * @param {string} email
   * @param {string} password
   * @returns
   * @memberof AuthService
   * Logs in the user based on email and password provided
   * FOR NOW WE AREN'T USING SHA OR JSON WEB TOKEN TO KEEP PASSWORDS
   * ENCRYPTED SINCE DATA IS ALREADY ON UI
   */
  public login(email: string, password: string) {
    const userList = this.commonService.getUserListFromStorage();
    const user = userList.find((user) => user.email === email && user.password === password);
      if (!user) {
        return {
          status: 401,
          message: 'Email or Password is incorrect'
        };
      }
  
      // Updates the userValue object on storage
      this.userValue = user;
      return {
        status: 201,
        message: 'Logged in Successfully',
        data: user
      };
  }


  /**
   *
   * @param {User} user
   * @memberof AuthService
   * Registers a new user with given Email, Name and password
   */
  public signUp(user: User) {
    let userList =  this.commonService.getUserListFromStorage();
    user.id = Math.random();

    // By default user created is not an admin
    user.isAdmin = false;
    userList.push(user);
    this.userValue = user;

    // Adds new user Registered the existing users list
    this.commonService.setUserListToLocalStorage(userList);
  }


  /**
   *
   * @memberof AuthService
   * Logs out the user by removing user from localstorage and routes to login page
   */
  public logout(): void {
    localStorage.removeItem('user');
    this.user = null;
    this.userSubject.next(null);
  }

}
