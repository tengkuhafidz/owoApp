import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CheckoutSuccessPage } from '../checkout-success/checkout-success';
import { Storage } from '@ionic/storage';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { GiftServiceProvider } from '../../providers/gift-service/gift-service';


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
  selectedFriend: any;
  selectedCard: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public userServiceProvider: UserServiceProvider, public giftServiceProvider: GiftServiceProvider, public storage: Storage) {
    this.selectedGift = navParams.get('gift');
    // this.getUser();
    this.setUserData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckoutPage');
  }

  checkout() {
    console.log('selectedFriend', this.selectedFriend);
    console.log('selectedCard', this.selectedCard);
    console.log('user', this.user)
    if(this.user && this.selectedCard && this.selectedFriend) {
      const order = {
        customer: this.user,
        oiList: [{
          product: this.selectedGift,
          oiAmount: this.selectedGift.pPrice,
          oiQty: 1
        }],
        orderAddress: this.selectedFriend
      }
      console.log('ORDER!', order)
      this.navCtrl.push(CheckoutSuccessPage)
    }
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
