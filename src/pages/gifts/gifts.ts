import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CheckoutPage } from '../checkout/checkout';
import { GiftServiceProvider } from '../../providers/gift-service/gift-service';
import { Storage } from '@ionic/storage';


/**
 * Generated class for the GiftsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gifts',
  templateUrl: 'gifts.html',
})
export class GiftsPage {
  gifts: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public giftServiceProvider: GiftServiceProvider, public storage: Storage) {
    this.getGiftSuggestions();
    this.setUser();
  }

  getGiftSuggestions() {
    this.giftServiceProvider.getGiftSuggestions()
    .then(data => {
      this.gifts = [];
      for(let i = 0; i < 6; i+=1) {
        this.gifts.push(data[i]);
      }
    });
  }

  setUser() {
    console.log('currrrrr: ', this.storage.get('user').then((val) => {
          console.log('user', val);
        }));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GiftsPage');
  }

  chooseGift(event, gift) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(CheckoutPage, {
      gift: gift
    });
  }

}
