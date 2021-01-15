import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/services/auth.service';
import { TaskService } from 'src/app/services/task.service';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() public task: Task;
  public createTaskFormGroup: FormGroup;
  public isEditable: boolean = false;
  public tempData;
  constructor(private dialog: MatDialog, private taskService: TaskService, private snackBar: MatSnackBar, private authService: AuthService) { }

  ngOnInit(): void {
    this.tempData = {...this.task};
    this.createTaskFormGroup = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    })
  }

  public editTask(): void {
    this.isEditable = true; 
  }

  public cancel(): void {
    this.isEditable = false;
    this.task = this.tempData;
  }


  /**
   *
   * @memberof TaskComponent
   * Updates Task in the localstorage
   */
  public updateTask(): void {
    const response = this.taskService.updateTask(this.task);
    if (response.status === 201) {
      this.isEditable = false;
    }
      this.snackBar.open(response.message, null, { duration: 2000 });
  }


  /**
   *
   * @memberof TaskComponent
   * Deletes task from the localstorage
   */
  public deleteTask(): void {
    const response = this.taskService.deleteTask(this.task.id);
    if (response.status === 200) {
      this.snackBar.open(response.message, null, { duration: 2000 });
    }
  }
}
