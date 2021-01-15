import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../models/task';
import { User } from '../models/user';
import { AuthService } from './auth.service';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  public taskList: Observable<Task[]>;
  public taskListSubject: BehaviorSubject<Task[]>;
  public user: User;

  constructor(private authService: AuthService, private commonService: CommonService) {
    this.authService.user.subscribe((user) => {
      this.user = user;
    })
    let taskFromStorage = this.getTaskListBasedOnUser();
    this.taskListSubject = new BehaviorSubject<Task[]>(taskFromStorage);
    this.taskList = this.taskListSubject.asObservable();
  }


  /**
   *
   * @returns {Task[]}
   * @memberof TaskService
   * Gets task list from storage and filters it based on the logged in user
   */
  public getTaskListBasedOnUser(): Task[] {
    let taskList = this.commonService.getTaskListFromLocalStorage();
    if (taskList && this.user) {
      taskList = taskList.filter((task) => task.userId === this.user.id);
    } else {
      taskList = [];
    }
    return taskList;
  }
   
  public set taskValue(taskList) {
    this.commonService.setTaskListToLocalStorage(taskList);
    this.taskListSubject.next(taskList);
  }


  /**
   *
   * @param {Task} task
   * @returns
   * @memberof TaskService
   * Creates Task list and sets to localstorage corresponding to signed in user
   */
  public createTask(task: Task) {
    let taskList =  this.getTaskList();
    task.id = Math.random();
    task.userId = this.user.id;
    taskList.push(task);
    this.taskValue = taskList;

    // Filters Task list for the current user
    let xyz = taskList.filter((task) => task.userId === this.user.id);
    this.taskListSubject.next(xyz);
    return {
      status: 201,
      message: 'Task Added Succesfully',
      data: task
    }
  }


  /**
   *
   * @param {Task} updatedTask
   * @returns
   * @memberof TaskService
   * Updates Task and updates to local Storage
   */
  public updateTask(updatedTask: Task) {
    let taskList = this.getTaskList();
    const index = taskList.findIndex((task) => task.id === updatedTask.id);
    taskList[index] = updatedTask;
    let xyz = taskList.filter((task) => task.userId === this.user.id);
    this.taskListSubject.next(xyz);
    return {
      status: 201,
      message: 'Task Updated Successfully'
    }
  }


  /**
   *
   * @returns {Task[]}
   * @memberof TaskService
   * Fetches Task list from localstorage if null, it returns []
   */
  public getTaskList(): Task[] {
    let taskList =  localStorage.getItem('taskList') ? JSON.parse(localStorage.getItem('taskList')) : [];
    return taskList;
  }


  /**
   *
   * @param {number} id
   * @returns
   * @memberof TaskService
   * Deletes the selected task based on the id
   */
  public deleteTask(id: number) {
    let taskList = this.getTaskListBasedOnUser();
    let index = taskList.findIndex((task) => task.id === id);
    taskList.splice(index,1);
    this.taskValue = taskList;
    return {
      status: 200,
      message: 'Successfully deleted Task'
    }
  }
}
