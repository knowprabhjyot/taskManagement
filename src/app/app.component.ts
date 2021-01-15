import { Component } from '@angular/core';
import { User } from './models/user';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private authService: AuthService) {
    let userList = this.authService.getUserListFromStorage();
    const admin = userList.find((user) => user.isAdmin === true);
    if (!admin) {
      const newAdmin: User = {
        id: Math.random(),
        name: 'Admin',
        password: '1234',
        isAdmin: true,
        email: 'admin@gmail.com'
      }
      userList.push(newAdmin);
      this.authService.setUserListToLocalStorage(userList);
    }
  }
}
