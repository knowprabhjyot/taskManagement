import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/models/task';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { TaskService } from 'src/app/services/task.service';
import { UserService } from 'src/app/services/user.service';
import { AddTaskComponent } from '../add-task/add-task.component';
import { AddUserComponent } from '../add-user/add-user.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  
})
export class HomeComponent implements OnInit, OnDestroy {
  public taskList: Task[] = [];
  public userList: User[] = [];
  public taskSubscription: Subscription;
  public userSubscription: Subscription;
  public user: User;
  constructor(private taskService: TaskService, private dialog: MatDialog, private authService: AuthService,
              private userService: UserService) { }

  ngOnInit(): void {
    this.user = this.authService.userValue;
    if (this.user.isAdmin) {
      this.getUserList();
    } else {
      this.getTaskList();
    }
  }

  ngOnDestroy(): void {
    if (this.taskSubscription) {
      this.taskSubscription.unsubscribe();
      this.taskList = [];
    }
  }

  public getTaskList(): void {
    this.taskSubscription = this.taskService.taskList.subscribe((response) => {
      this.taskList = response;
      console.log(this.taskList);
    })
  }


  /**
   *
   * @memberof HomeComponent
   * Gets user list from the localstorage and removes admin from the UI View
   */
  public getUserList(): void {
    this.userSubscription = this.userService.userList.subscribe((response) => {
      this.userList = response;
      const index = this.userList.findIndex((user) => user.isAdmin === true);
      this.userList.splice(index, 1);
    })
  }


  public createTask(): void {
    const dialogRef = this.dialog.open(AddTaskComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  public addUser(): void {
    const dialogRef = this.dialog.open(AddUserComponent, {
      width: '500'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


}
