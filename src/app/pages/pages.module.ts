import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GameLibraryComponent} from './game-library/game-library.component';
import {SharedModule} from '../shared/shared.module';
import {IonicModule} from '@ionic/angular';
import {GameSearchComponent} from './game-search/game-search.component';
import {FormsModule} from '@angular/forms';
import {LoginComponent} from './login/login.component';


@NgModule({
  declarations: [
    GameLibraryComponent,
    GameSearchComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    IonicModule,
    FormsModule
  ]
})
export class PagesModule {
}
