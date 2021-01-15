import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupFormGroup: FormGroup; 
  public hide = true;
  constructor(private authService: AuthService, private router: Router, private taskService: TaskService) { }

  ngOnInit(): void {
    this.signupFormGroup = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    })
  }



  /**
   *
   * @memberof SignupComponent
   * Signs up the user after the form is valid
   */
  public signUp(): void {
    if (this.signupFormGroup.valid) {
      const user = this.signupFormGroup.value;
      this.authService.signUp(user);
      const taskList = this.taskService.getTaskListBasedOnUser();
      this.taskService.taskListSubject.next(taskList);
      this.router.navigateByUrl('');
    }
  }

}
