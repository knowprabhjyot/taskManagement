import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';
import { TaskService } from './task.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: Observable<User>;
  public userSubject: BehaviorSubject<User>;

  constructor() { 
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): User {
    return this.userSubject.value;
  }

  public set userValue(user) {
    localStorage.setItem('user', JSON.stringify(user));
    this.userSubject.next(user);
  }

  public getUserListFromStorage(): User[] {
    let userList = JSON.parse(localStorage.getItem('userList'));
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
    let userList =  localStorage.getItem('userList') ? JSON.parse(localStorage.getItem('userList')) : [];
    user.id = Math.random();
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
