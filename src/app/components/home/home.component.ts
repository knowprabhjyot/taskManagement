import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public taskList: Task[] = [];
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.getTaskList();
  }

  public getTaskList(): void {
    this.taskService.taskList.subscribe((response) => {
      this.taskList = response;
    })
  }

}
