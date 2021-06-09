import {Component} from '@angular/core';
import {Router, Event} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    {title: 'Ludothèque', url: '/game-library', icon: 'mail'},
    {title: 'Ajouter Ludo', url: '/game-search', icon: 'mail'},
    {title: 'Login', url: '/login', icon: 'mail'},
  ];
  public labels = ['Todo'];

  currentPage: string;

  constructor() {
  }

  pageChange(p: { icon: string; title: string; url: string }) {
    this.currentPage = p.title;
  }
}
