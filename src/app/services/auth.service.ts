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
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): User {
    return this.userSubject.value;
  }

  public login(email: string, password: string) {
    const userList = JSON.parse(localStorage.getItem('userList'));
    const user = userList.find((user) => user.email === email && user.password === password);
    if (!user) {
      return {
        status: 500,
        message: 'Email or Password is incorrect'
      };
    }

    localStorage.setItem('user', JSON.stringify(user));
    this.userSubject.next(user);
    return {
      status: 201,
      message: 'Logged in Successfully',
      data: user
    };
  }

  public signUp(user: User) {
    let userList =  localStorage.getItem('userList') ? JSON.parse(localStorage.getItem('userList')) : null;
    if (userList) {
      userList.push(user);
    } else {
      userList = [user];
    }
    localStorage.setItem('userList', JSON.stringify(userList));
  }

  public logout(): void {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
    this.userSubject.next(null);
  }

}
