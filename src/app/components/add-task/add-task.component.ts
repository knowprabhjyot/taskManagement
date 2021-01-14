import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TaskService } from 'src/app/services/task.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  createTaskFormGroup: FormGroup;
  public hide = true;
  constructor(private taskService: TaskService, private router: Router, private snackBar: MatSnackBar,
              private authService: AuthService, private dialogRef: MatDialogRef<AddTaskComponent>) { }

  ngOnInit(): void {
    this.createTaskFormGroup = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    })
  }

  public createTask(): void {
    let task = this.createTaskFormGroup.value;
    const user = this.authService.userValue;
    task.userId = user.id;
    const response = this.taskService.createTask(task);
    if (response.status === 201) {
      this.router.navigateByUrl('');
      this.snackBar.open(response.message, null, { duration: 2000 });
    } else {
      this.snackBar.open(response.message, null, { duration: 2000 });
    }
    this.closeDialog();
  }

  public closeDialog(): void {
    this.dialogRef.close();
  }

}
