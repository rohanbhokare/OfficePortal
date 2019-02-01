import { Router } from '@angular/router';
import { AlertifyService } from './_services/alertify.service';
import { AuthService } from './_services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Omni-Bridge Portal';

  constructor(private authService: AuthService, private alertify: AlertifyService, private router: Router) {  }

  loggedIn () {
    return this.authService.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.authService.decodedToken = null;
    this.authService.currentUser = null;
    this.alertify.message('logged out');
    this.router.navigate(['/home']);
  }
}
