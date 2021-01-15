import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public userList: Observable<User[]>;
  public userListSubject: BehaviorSubject<User[]>;
  constructor(private authService: AuthService) {
    let userFromStorage = this.getUserListFromStorage();
    this.userListSubject = new BehaviorSubject<User[]>(userFromStorage);
    this.userList = this.userListSubject.asObservable();
   }

  public createUser(user: User) {
    let userList =  this.authService.getUserListFromStorage();
    user.id = Math.random();
    user.isAdmin = false;
    userList.push(user);
    this.authService.setUserListToLocalStorage(userList);
    this.userListSubject.next(userList);
    return {
      status: 201,
      message: 'User Added Succesfully',
      data: user
    }
  }

  public getUserListFromStorage(): User[] {
    let userList =  localStorage.getItem('userList') ? JSON.parse(localStorage.getItem('userList')) : [];
    return userList;
  }

  public updateUser(updatedUser: User) {
    let userList = this.getUserListFromStorage();
    const index = userList.findIndex((user) => user.id === updatedUser.id);
    userList[index] = updatedUser;
    this.userListSubject.next(userList);
    this.authService.setUserListToLocalStorage(userList);
    return {
      status: 201,
      message: 'User Updated Successfully'
    }
  }

  public deleteUser(id: number) {
    let userList = this.getUserListFromStorage();
    let index = userList.findIndex((user) => user.id === id);
    userList.splice(index,1);
    this.userListSubject.next(userList);
    this.authService.setUserListToLocalStorage(userList);
    return {
      status: 200,
      message: 'Successfully deleted User'
    }
  }


}
