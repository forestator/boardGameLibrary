import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {GameLibraryComponent} from './pages/game-library/game-library.component';
import {GameSearchComponent} from './pages/game-search/game-search.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'game-library',
    component: GameLibraryComponent
  },
  {
    path: 'game-search',
    component: GameSearchComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
