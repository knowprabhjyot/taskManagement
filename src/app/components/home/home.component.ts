import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';
import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public taskList: Task[] = [];
  constructor(private taskService: TaskService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getTaskList();
  }

  public getTaskList(): void {
    this.taskService.taskList.subscribe((response) => {
      this.taskList = response;
    })
  }

  
  public createTask(): void {
    const dialogRef = this.dialog.open(AddTaskComponent, {
      width: '400px'
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


}
