import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: Observable<User>;
  public userSubject: BehaviorSubject<User>;

  constructor() { 
    this.userSubject = new BehaviorSubject<User>(this.getUSerFromLocalStorage());
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): User {
    return this.userSubject.value;
  }

  public getUSerFromLocalStorage(): User {
    return JSON.parse(localStorage.getItem('user'));
  }

  public setUserToLocalStorage(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  public getUserListFromLocalStorage(): User[] {
    return JSON.parse(localStorage.getItem('userList'));
  }

  public setUserListToLocalStorage(userList: User[]): void {
    localStorage.setItem('userList', JSON.stringify(userList));
  }

  public set userValue(user) {
    this.setUserToLocalStorage(user);
    this.userSubject.next(user);
  }

  public getUserListFromStorage(): User[] {
    let userList = this.getUserListFromLocalStorage();
    if (!userList) {
      userList = [];
    }
    return userList;
  }

  public login(email: string, password: string) {
    const userList = this.getUserListFromStorage();
    const user = userList.find((user) => user.email === email && user.password === password);
      if (!user) {
        return {
          status: 500,
          message: 'Email or Password is incorrect'
        };
      }
  
      this.userValue = user;
      return {
        status: 201,
        message: 'Logged in Successfully',
        data: user
      };
  }

  public signUp(user: User) {
    let userList =  this.getUserListFromStorage();
    user.id = Math.random();
    user.isAdmin = false;
    userList.push(user);
    this.userValue = user;
    localStorage.setItem('userList', JSON.stringify(userList));
  }

  public logout(): void {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
    this.user = null;
    this.userSubject.next(null);
  }

}
