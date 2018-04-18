import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CheckoutSuccessPage } from '../checkout-success/checkout-success';
import { Storage } from '@ionic/storage';
import { UserServiceProvider } from '../../providers/user-service/user-service';


/**
 * Generated class for the CheckoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class CheckoutPage {
  selectedGift: any;
  user: any;
  friends: any;
  cards: any;
  chosenFriend: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public userServiceProvider: UserServiceProvider, public storage: Storage) {
    this.selectedGift = navParams.get('gift');
    // this.getUser();
    this.setUserData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckoutPage');
  }

  checkout() {
    this.navCtrl.push(CheckoutSuccessPage)
  }

  getUser() {
  
  }

  setUserData() {
    this.storage.get('user').then((user) => {
      this.user = user;
      this.friends = user.addressList;
      this.cards = user.cardList;
    });
  }
}
