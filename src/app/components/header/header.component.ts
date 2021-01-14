import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: User;
  constructor(private authService: AuthService,  private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.authService.user.subscribe((response) => {
      console.log(response);
      this.user = response;
    });
  }

  public logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('/login');
    this.snackBar.open('Successfully Logged Out', null, {duration: 2000});
    this.user = null;
  }

}
