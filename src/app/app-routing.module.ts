import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import{HomeComponent} from './components/home/home.component';
import{CarrersComponent} from './components/carrers/carrers.component';

const routes: Routes = [

  {path: '', component: HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'carrers', component:CarrersComponent},
  //{path: 'search', component: SearchComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}, //siempre dejar de ultimo
  
  

];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
