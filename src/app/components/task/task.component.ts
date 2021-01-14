import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TaskService } from 'src/app/services/task.service';
import { Task } from '../../models/task';
import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() public task: Task;
  constructor(private dialog: MatDialog, private taskService: TaskService, private snackBar: MatSnackBar) { }

  public editTask(): void {
    const dialogRef = this.dialog.open(AddTaskComponent, {
      width: '400px',
      data: this.task
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  public deleteTask(): void {
    console.log(this.task.id);
    const response = this.taskService.deleteTask(this.task.id);
    if (response.status === 200) {
      this.snackBar.open(response.message, null, { duration: 2000 });
    }
  }
}
