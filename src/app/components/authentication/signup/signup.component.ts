import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupFormGroup: FormGroup; 
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.signupFormGroup = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    })
  }

  public signUp(): void {
    const user = this.signupFormGroup.value;
    this.authService.signUp(user);
    this.router.navigateByUrl('');
  }

}
