import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../models/task';
import { User } from '../models/user';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  public taskList: Observable<Task[]>;
  public taskListSubject: BehaviorSubject<Task[]>;
  public user: User;
  constructor(private authService: AuthService) {
    this.authService.user.subscribe((user) => {
      this.user = user;
    })
    let taskFromStorage = this.getTaskListBasedOnUser();
    this.taskListSubject = new BehaviorSubject<Task[]>(taskFromStorage);
    this.taskList = this.taskListSubject.asObservable();
  }

  public getTaskListBasedOnUser(): Task[] {
    let taskList = JSON.parse(localStorage.getItem('taskList'));
    if (taskList && this.user) {
      taskList = taskList.filter((task) => task.userId === this.user.id);
    } else {
      taskList = [];
    }
    return taskList;
  }
   
  public set taskValue(taskList) {
    localStorage.setItem('taskList', JSON.stringify(taskList));
    this.taskListSubject.next(taskList);
  }

  public createTask(task: Task) {
    let taskList =  localStorage.getItem('taskList') ? JSON.parse(localStorage.getItem('taskList')) : null;
    task.id = Math.random();
    task.userId = this.user.id;
    if (taskList) {
      taskList.push(task);
    } else {
      taskList = [task];
    }
    this.taskValue = taskList;
    let xyz = taskList.filter((task) => task.userId === this.user.id);
    this.taskListSubject.next(xyz);
    return {
      status: 201,
      message: 'Task Added Succesfully',
      data: task
    }
  }

  public updateTask(updatedTask: Task) {
    let taskList = this.getTaskList();
    const index = taskList.findIndex((task) => task.id === updatedTask.id);
    taskList[index] = updatedTask;
    this.taskValue = taskList;
    return {
      status: 201,
      message: 'Task Updated Successfully'
    }
  }

  public getTaskList(): Task[] {
    let taskList =  localStorage.getItem('taskList') ? JSON.parse(localStorage.getItem('taskList')) : null;
    if (!taskList) {
      return []; 
    }
    return taskList;
  }

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
