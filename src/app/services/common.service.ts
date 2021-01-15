import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }


  /**
   * @param {User[]} userList
   * @memberof CommonService
   * Sets UserList to local storage
   */
  public setUserListToLocalStorage(userList: User[]): void {
    localStorage.setItem('userList', JSON.stringify(userList));
  }


  /**
   *
   * @returns {User[]}
   * @memberof CommonService
   * Gets UserList from LocalStorage
   */
  public getUserListFromLocalStorage(): User[] {
    return JSON.parse(localStorage.getItem('userList'));
  }


  /**
   *
   * @returns {User[]}
   * @memberof CommonService
   * Returns [] if userList is undefined otherwise returns list
   */
  public getUserListFromStorage(): User[] {
    let userList = this.getUserListFromLocalStorage();
    if (!userList) {
      userList = [];
    }
    return userList;
  }


  /**
   *
   * @returns {User}
   * @memberof CommonService
   * Gets Current User from localstorage
   */
  public getUSerFromLocalStorage(): User {
    return JSON.parse(localStorage.getItem('user'));
  }


  /**
   *
   * @param {User} user
   * @memberof CommonService
   * Sets user to local storage
   */
  public setUserToLocalStorage(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
  }


  /**
   *
   * @returns {Task[]}
   * @memberof CommonService
   * Gets task list from local storage
   */
  public getTaskListFromLocalStorage(): Task[] {
    return JSON.parse(localStorage.getItem('taskList'));
  }


  /**
   *
   * @param {Task[]} taskList
   * @memberof CommonService
   * Sets task list to local storage
   */
  public setTaskListToLocalStorage(taskList: Task[]): void {
    localStorage.setItem('taskList', JSON.stringify(taskList));
  }

}
