import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CarrersComponent } from './components/carrers/carrers.component';
import { HomeComponent } from './components/home/home.component';

// const routes: Routes = [
//   {
//     path: '',
//     redirectTo: '/home',
//     pathMatch: 'full'
//   },
//   {
//     path: ':id',
//     loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
//   }
// ];

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'carrers', component: CarrersComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
