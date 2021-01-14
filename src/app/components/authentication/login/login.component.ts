import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup; 
  constructor(private authService: AuthService, private router: Router, private snackBar: MatSnackBar) { }
  
  ngOnInit(): void {
    this.loginFormGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    })
  }

  public login(): void {
    const response = this.authService.login(this.loginFormGroup.value.email, this.loginFormGroup.value.password);
    if (response.status === 201) {
      this.router.navigateByUrl('');
    } else {
      this.snackBar.open(response.message, null, { duration: 2000});
    }
  }
}
