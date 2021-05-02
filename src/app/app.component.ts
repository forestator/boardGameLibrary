import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    {title: 'Ludothèque', url: '/ludotheque', icon: 'mail'},
  ];
  public labels = ['Todo'];

  currentPage: string;

  constructor() {
  }

  pageChange(p: { icon: string; title: string; url: string }) {
    this.currentPage = p.title;
  }
}
