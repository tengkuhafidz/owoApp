import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  user: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public userServiceProvider: UserServiceProvider, private storage: Storage) {
    storage.get('user').then((val) => {
      console.log('user', val);
    });
    this.getUser();
  }

  getUser() {
    this.userServiceProvider.getUser()
    .then(data => {
      this.user = data;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  logout() {
    this.storage.clear().then(() => this.navCtrl.setRoot(LoginPage))
  }

}
