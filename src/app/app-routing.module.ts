import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import{HomeComponent} from './components/home/home.component';
import{CarrersComponent} from './components/carrers/carrers.component';
import{ModalityComponent} from './components/modality/modality.component';
import { DaysComponent } from './components/days/days.component';
import{AnniosComponent}  from './components/annios/annios.component';
import { ClassComponent } from './components/class/class.component';
import { LoginComponent } from './pages/login/login.component';
import { TeachersComponent } from './pages/teachers/teachers.component';
import { InfoComponent } from './pages/info/info.component';

const routes: Routes = [

  {path: '', component: HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'carrers', component:CarrersComponent},
  {path:'modality/:id', component:ModalityComponent},
  {path: 'days/:id', component:DaysComponent},
  {path: 'annios/:id', component:AnniosComponent},
  {path: 'class/:id', component:ClassComponent},
  {path: 'teacher', component:TeachersComponent},
  {path: 'info', component:InfoComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}, //siempre dejar de ultimo
  
  

];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
