import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  addUserFormGroup: FormGroup;
  public hide = true;
  constructor(private router: Router, private snackBar: MatSnackBar,
              private authService: AuthService, private dialogRef: MatDialogRef<AddUserComponent>,
              private userService: UserService) { }

  ngOnInit(): void {
    this.addUserFormGroup = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    })
  }

  public createUser(): void {
    let user = this.addUserFormGroup.value;
    const response = this.userService.createUser(user);
    if (response.status === 201) {
      this.router.navigateByUrl('');
      this.snackBar.open(response.message, null, { duration: 2000 });
    }
    this.closeDialog();
  }

  public closeDialog(): void {
    this.dialogRef.close();
  }

}
