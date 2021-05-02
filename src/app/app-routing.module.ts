import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {GameLibraryComponent} from './pages/ludotheque/game-library.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'ludotheque',
    pathMatch: 'full'
  },
  {
    path: 'ludotheque',
    component: GameLibraryComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
