import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GameLibraryComponent} from './ludotheque/game-library.component';
import {SharedModule} from '../shared/shared.module';
import {IonicModule} from '@ionic/angular';


@NgModule({
  declarations: [
    GameLibraryComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    IonicModule
  ]
})
export class PagesModule {
}
