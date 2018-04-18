import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { Storage } from '@ionic/storage';
import { GiftsPage } from '../gifts/gifts';


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  public cName: string;
  public cEmail: string;
  public cUserName: string;
  public cPassword: string;
  public error: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public userServiceProvider: UserServiceProvider, public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register() {
    if (this.cName, this.cEmail, this.cUserName, this.cPassword) {
      this.userServiceProvider.register(this.cName, this.cEmail, this.cUserName, this.cPassword)
        .then(data => {
          console.log('REGISTRATION SUCCESS BY RIGHT', data)
          this.storage.set('user', data)
          this.navCtrl.setRoot(GiftsPage);
      }).catch((error) => {
          this.error = "*Invalid registration";
        });
      } else {
        this.error = "*please fill in all fields";
      }

    }
}
