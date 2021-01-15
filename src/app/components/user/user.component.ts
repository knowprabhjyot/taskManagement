import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() public user: User;
  public createUserFormGroup: FormGroup;
  public isEditable: boolean = false;
  public tempData;
  constructor(private userService: UserService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.tempData = {...this.user};
    this.createUserFormGroup = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email])
    })
  }

  public editUser(): void {
    this.isEditable = true; 
  }

  public cancel(): void {
    this.isEditable = false;
    this.user = this.tempData;
  }

  public updateUser(): void {
    const response = this.userService.updateUser(this.user);
    if (response.status === 201) {
      this.isEditable = false;
      this.snackBar.open(response.message, null, { duration: 2000 });
    } else {
      this.snackBar.open(response.message, null, { duration: 2000 });
    }
  }

  public deleteUser(): void {
    const response = this.userService.deleteUser(this.user.id);
    if (response.status === 200) {
      this.snackBar.open(response.message, null, { duration: 2000 });
    }
  }
}
