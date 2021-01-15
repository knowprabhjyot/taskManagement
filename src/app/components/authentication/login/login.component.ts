import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup; 
  public hide = true;
  constructor(private authService: AuthService, private router: Router, private snackBar: MatSnackBar, private taskService: TaskService) { }
  
  ngOnInit(): void {
    this.loginFormGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    })
  }



  /**
   *
   * @memberof LoginComponent
   * Logs in the user after the form is valid
   */
  public login(): void {
    if (this.loginFormGroup.valid) {
      const response = this.authService.login(this.loginFormGroup.value.email, this.loginFormGroup.value.password);
      if (response.status === 201) {
        this.router.navigateByUrl('');
        const taskList = this.taskService.getTaskListBasedOnUser();
        this.taskService.taskListSubject.next(taskList);
      }
      this.snackBar.open(response.message, null, {duration: 2000});
    }
  }
}
