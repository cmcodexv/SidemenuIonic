import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { User } from 'src/app/interfaces/interfaces';
import { LocalStorageService } from 'src/app/services/localStorage.service';

@Component({
  selector: 'app-loginp',
  templateUrl: './loginp.page.html',
  styleUrls: ['./loginp.page.scss'],
})
export class LoginpPage implements OnInit {

  public identity: User;

  user: any = {
    email: '',
    security: ''
  };
  constructor(
    private localStorageService: LocalStorageService,
    public alertCtrl: AlertController,
    private navCtrl: NavController,

  ) { }

  ngOnInit() {}

  async login( flogin: NgForm)
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
