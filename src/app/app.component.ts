import { Component } from '@angular/core';
import { User } from './models/user';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private commonService: CommonService) {
    // Fetches user List and creates an Admin By default with credentials
    let userList = this.commonService.getUserListFromStorage();
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
      this.commonService.setUserListToLocalStorage(userList);
    }
  }
}
