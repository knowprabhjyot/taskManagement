import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public userList: Observable<User[]>;
  public userListSubject: BehaviorSubject<User[]>;

  constructor(private commonService: CommonService) {
    let userFromStorage = this.commonService.getUserListFromStorage();
    this.userListSubject = new BehaviorSubject<User[]>(userFromStorage);
    this.userList = this.userListSubject.asObservable();
   }

  
  /**
   *
   * @param {User} user
   * @returns
   * @memberof UserService
   * Creates user and pushes it to the localstorage
   * FOR NOW WE AREN'T USING SHA OR JSON WEB TOKEN TO KEEP PASSWORDS
   * ENCRYPTED SINCE DATA IS ALREADY ON UI
   */
  public createUser(user: User) {
    let userList =  this.commonService.getUserListFromStorage();
    user.id = Math.random();
    user.isAdmin = false;
    userList.push(user);
    this.commonService.setUserListToLocalStorage(userList);
  
    // Updates the current user List to keep it synchronized for GUI
    this.userListSubject.next(userList);
    return {
      status: 201,
      message: 'User Added Succesfully',
      data: user
    }
  }


  /**
   *
   * @param {User} updatedUser
   * @returns
   * @memberof UserService
   * Updates the selected user and updates the localstorage
   */
  public updateUser(updatedUser: User) {
    let userList = this.commonService.getUserListFromStorage();

    // To find if the user exists
    const index = userList.findIndex((user) => user.id === updatedUser.id);
    userList[index] = updatedUser;

    // Updates the current user List to keep it synchronized for GUI
    this.userListSubject.next(userList);
    this.commonService.setUserListToLocalStorage(userList);
    return {
      status: 201,
      message: 'User Updated Successfully'
    }
  }


  /**
   *
   * @param {number} id
   * @returns
   * @memberof UserService
   * Deletes the selected user based on id and updates the localstorage
   */
  public deleteUser(id: number) {
    let userList = this.commonService.getUserListFromStorage();
    let index = userList.findIndex((user) => user.id === id);
    userList.splice(index,1);

    // Updates the current user List to keep it synchronized for GUI
    this.userListSubject.next(userList);
    this.commonService.setUserListToLocalStorage(userList);
    return {
      status: 200,
      message: 'Successfully deleted User'
    }
  }
  

}
