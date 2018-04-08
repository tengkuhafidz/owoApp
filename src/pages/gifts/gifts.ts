import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CheckoutPage } from '../checkout/checkout';
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
  gifts = [
    {
      name: "Kisses",
      price: "$2.00",
      image: "assets/imgs/kisses.jpg",
    },
    {
      name: "Hershey",
      price: "$2.10",
      image: "assets/imgs/hershey.jpg",
    },
    {
      name: "Dove",
      price: "$2.50",
      image: "assets/imgs/dove.jpg",
    },
    {
      name: "Bounty",
      price: "$2.10",
      image: "assets/imgs/bounty.jpg",
    },
    {
      name: "Dairymilk",
      price: "$2.50",
      image: "assets/imgs/dairymilk.jpg",
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
