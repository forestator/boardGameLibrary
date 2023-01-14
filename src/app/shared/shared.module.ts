import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {GameLibraryService} from './services/game-library.service';
import {HttpClientModule} from '@angular/common/http';
import {IonicModule} from '@ionic/angular';
import {BGGService} from './services/bgg.service';
import {GameDetailsComponent} from './components/game-details/game-details.component';
import {GameCardComponent} from './components/game-card/game-card.component';

@NgModule({
  declarations: [
    HeaderComponent,
    GameDetailsComponent,
    GameCardComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    IonicModule
  ],
  exports: [
    HeaderComponent,
    GameDetailsComponent,
    GameCardComponent,
  ],
  providers: [
    GameLibraryService,
    BGGService
  ]
})
export class SharedModule {
}
