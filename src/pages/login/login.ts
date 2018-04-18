import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { GiftsPage } from '../gifts/gifts';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { Storage } from '@ionic/storage';



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public cUserName: string;
  public cPassword: string;
  public error: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public userServiceProvider: UserServiceProvider, public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    this.userServiceProvider.login(this.cUserName, this.cPassword)
    .then(data => {
      this.navCtrl.setRoot(GiftsPage);
    }).catch((error) => {
      this.error = "*Invalid username or password" ;
    });
  }

  goToSignUpPage() {
    this.navCtrl.push(RegisterPage);
  }

}
