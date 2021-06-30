import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from '../../services/localStorage.service';
import { User } from '../../interfaces/interfaces';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
// import { Plugins } from '@capacitor/core';

// const { Storage } = Plugins;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  public identity: User;

  user = {
    email: '',
    security: ''
  };
  constructor(
    private localStorageService: LocalStorageService,
    public alertCtrl: AlertController,
    private navCtrl: NavController,

  ) { }



  ngOnInit() {}

  async login( flogin:any)
  {

    if((flogin.value.email === 'carlos@gmail.com') && (flogin.value.password === 'admin')){
         // identity
         this.identity =  {
          email: 'carlos@gmail.com',
          password: 'admin'
        };
        // PERSISTIR DATOS USUARIO IDENTIFICADO
        this.localStorageService.setItem('identity',  JSON.stringify(this.identity));
        this.navCtrl.navigateRoot('/home');

    }else{
      const alert = await this.alertCtrl.create({
        cssClass: 'my-custom-class',
        header: '¡Datos Incorrectos!',
        message: 'Revise sus datos y vuelva a intentarlo.',
        buttons: [
          {
            text: 'Ok',
            cssClass: 'secondary'
          }
        ]
      });
  
      await alert.present();
  
    }
 
  }


}
