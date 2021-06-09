import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {GameLibraryComponent} from './pages/game-library/game-library.component';
import {GameSearchComponent} from './pages/game-search/game-search.component';
import {LoginComponent} from './pages/login/login.component';
import {LoginGuard} from './shared/guard/login.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'game-library',
    component: GameLibraryComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'game-search',
    component: GameSearchComponent,
    canActivate: [LoginGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
