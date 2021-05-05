import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {GameLibraryService} from './services/game-library.service';
import {HttpClientModule} from '@angular/common/http';
import {IonicModule} from '@ionic/angular';
import {BGGService} from './services/bgg.service';
import { BoardGameNamePipe } from './pipe/board-game-name.pipe';
import {GameDetailsComponent} from './components/game-details/game-details.component';
import { BoardGameThumbnailPipe } from './pipe/board-game-thumbnail.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    BoardGameNamePipe,
    GameDetailsComponent,
    BoardGameThumbnailPipe,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    IonicModule
  ],
  exports: [
    HeaderComponent,
    BoardGameNamePipe,
    GameDetailsComponent,
    BoardGameThumbnailPipe,
  ],
  providers: [
    GameLibraryService,
    BGGService
  ]
})
export class SharedModule {
}
