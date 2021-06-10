import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import{HomeComponent} from './components/home/home.component';
import{CarrersComponent} from './components/carrers/carrers.component';
import{HeaderComponent} from './components/header/header.component';
import{AdministracionComponent} from './components/administracion/administracion.component';


@NgModule({
  declarations: [AppComponent,HomeComponent,CarrersComponent,HeaderComponent,AdministracionComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
