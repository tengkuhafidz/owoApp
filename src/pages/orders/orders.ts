import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CheckoutPage } from '../checkout/checkout';
import { OrderDetailsPage } from '../order-details/order-details';


/**
 * Generated class for the OrdersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-orders',
  templateUrl: 'orders.html',
})
export class OrdersPage {
  orders = [
    {
      name: "Kisses",
      price: "$2.00",
      date: "20 February",
      image: "assets/imgs/kisses.jpg",
    },
    {
      name: "Hershey",
      price: "$2.10",
      date: "19 February",
      image: "assets/imgs/hershey.jpg",
    },
    {
      name: "Dove",
      price: "$2.50",
      date: "18 February",
      image: "assets/imgs/dove.jpg",
    },
    {
      name: "Bounty",
      price: "$2.10",
      date: "17 February",
      image: "assets/imgs/bounty.jpg",
    },
    {
      name: "Dairymilk",
      price: "$2.50",
      date: "16 February",
      image: "assets/imgs/dairymilk.jpg",
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrdersPage');
  }

  chooseGift(event, gift) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(CheckoutPage, {
      gift: gift
    });
  }

  viewOrderDetails(event, order) {
    this.navCtrl.push(OrderDetailsPage, {
      order: order
    });
  }

}
