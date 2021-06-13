import {Component} from '@angular/core';
import {AutentificationService} from './shared/services/autentification.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    {title: 'Ludothèque', url: '/game-library', icon: 'mail'},
    {title: 'Ajouter Ludo', url: '/game-search', icon: 'mail'},
  ];
  public labels = ['Login'];

  currentPage: string;

  constructor(public auth: AutentificationService) {
  }

  pageChange(p: { icon: string; title: string; url: string }) {
    this.currentPage = p.title;
  }

  login() {
    this.auth.googleAuth();
  }

  logout() {
    this.auth.signOut();
  }
}
