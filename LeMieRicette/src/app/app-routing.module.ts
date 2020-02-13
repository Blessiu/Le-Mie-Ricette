import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'info',
    loadChildren: () => import('./info/info.module').then( m => m.InfoPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'language',
    loadChildren: () => import('./language/language.module').then( m => m.LanguagePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'forgot',
    loadChildren: () => import('./auth/forgot/forgot.module').then( m => m.ForgotPageModule)
  },
  {
    path: 'strumenti',
    loadChildren: () => import('./tab/strumenti/strumenti.module').then( m => m.StrumentiPageModule)
  },
  {
    path: 'frigorifero',
    loadChildren: () => import('./tab/frigorifero/frigorifero.module').then( m => m.FrigoriferoPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./tab/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'le-mie-ricette',
    loadChildren: () => import('./tab/le-mie-ricette/le-mie-ricette.module').then( m => m.LeMieRicettePageModule)
  },
  {
    path: 'add-ricetta',
    loadChildren: () => import('./tab/add-ricetta/add-ricetta.module').then( m => m.AddRicettaPageModule)
  },  {
    path: 'add-frigo-item',
    loadChildren: () => import('./tab/add-frigo-item/add-frigo-item.module').then( m => m.AddFrigoItemPageModule)
  },
  {
    path: 'calcolatrice',
    loadChildren: () => import('./tab/calcolatrice/calcolatrice.module').then( m => m.CalcolatricePageModule)
  },
  {
    path: 'timer',
    loadChildren: () => import('./tab/timer/timer.module').then( m => m.TimerPageModule)
  }




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
