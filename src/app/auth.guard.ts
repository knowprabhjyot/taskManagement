import { Injectable } from '@angular/core';
import { CanActivate, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const user = this.authService.userValue;
    console.log(user);
    if (user) {
      return true;
    }

    this.router.navigateByUrl('login');
    return false;
  }
  
}
