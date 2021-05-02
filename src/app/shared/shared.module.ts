import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {GameLibraryService} from './services/game-library.service';
import {HttpClientModule} from '@angular/common/http';
import {IonicModule} from '@ionic/angular';
import {BGGService} from './services/bgg.service';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    IonicModule
  ],
  exports: [
    HeaderComponent
  ],
  providers: [
    GameLibraryService,
    BGGService
  ]
})
export class SharedModule {
}
