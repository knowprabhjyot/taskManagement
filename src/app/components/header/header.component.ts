import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: User;
  constructor(private authService: AuthService,  private router: Router, private snackBar: MatSnackBar, private taskService: TaskService) { }

  ngOnInit(): void {
    this.authService.user.subscribe((response) => {
      console.log(response);
      this.user = response;
    });
  }


  /**
   *
   * @memberof HeaderComponent
   * Logs out the user and sets localstorage user to null
   */
  public logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('/login');
    this.snackBar.open('Successfully Logged Out', null, {duration: 2000});
    this.user = null;
  }

}
