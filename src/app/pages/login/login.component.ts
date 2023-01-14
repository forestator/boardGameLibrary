import {Component, OnInit} from '@angular/core';
import {AutentificationService} from '../../shared/services/autentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  pageTitle = 'Login';

  constructor(private auth: AutentificationService) {
  }

  ngOnInit() {
  }

  login() {
  //  this.auth.googleAuth();
  }

  logout() {
    this.auth.signOut();
  }
}
