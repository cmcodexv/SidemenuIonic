import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import{HomeComponent} from './components/home/home.component';
import{CarrersComponent} from './components/carrers/carrers.component';
import{HeaderComponent} from './components/header/header.component';
import{ModalityComponent} from './components/modality/modality.component';
import { DaysComponent } from './components/days/days.component';
import{AnniosComponent}  from './components/annios/annios.component';
import{ClassComponent}  from './components/class/class.component';
import{LoginComponent}  from './pages/login/login.component';
import{ModalNewComponent}  from './components/modal-new/modal-new.component';
import{TeachersComponent}  from './pages/teachers/teachers.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarrersComponent,
    HeaderComponent,
    ModalityComponent,
    DaysComponent, 
    AnniosComponent, 
    ClassComponent,
    LoginComponent,
    ModalNewComponent,
    TeachersComponent
  ],
  entryComponents: [],
  imports: [BrowserModule, FormsModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
