import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./pages/infop/infop.module').then( m => m.InfopPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/loginp/loginp.module').then( m => m.LoginpPageModule)
  },
  {
    path: 'teachers',
    loadChildren: () => import('./pages/teachersp/teachersp.module').then( m => m.TeacherspPageModule)
  },   
  {
    path: 'modality/:id',
    loadChildren: () => import('./pages/modality/modality.module').then( m => m.ModalityPageModule)
  },
  {
    path: 'carrers',
    loadChildren: () => import('./pages/carrers/carrers.module').then( m => m.CarrersPageModule)
  },
  {
    path: 'days/:id',
    loadChildren: () => import('./pages/days/days.module').then( m => m.DaysPageModule)
  },
  {
    path: 'annios/:id',
    loadChildren: () => import('./pages/annios/annios.module').then( m => m.AnniosPageModule)
  },
  {
    path: 'class/:id',
    loadChildren: () => import('./pages/class/class.module').then( m => m.ClassPageModule)
  },
  {
    path: '**', pathMatch: 'full', redirectTo: ''
  },
  
  //siempre dejar de ultimo
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
