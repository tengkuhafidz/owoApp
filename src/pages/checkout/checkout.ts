import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CheckoutSuccessPage } from '../checkout-success/checkout-success';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedGift = navParams.get('gift');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckoutPage');
  }

  checkout() {
    this.navCtrl.push(CheckoutSuccessPage)
  }

    /**
   * function to adjust the height of the message textarea
   * @param {any} event - the event, which is provided by the textarea input
   * @return {void}
   */
  protected adjustTextarea(event: any): void {
  	let textarea: any		= event.target;
  	textarea.style.overflow = 'hidden';
  	textarea.style.height 	= 'auto';
  	textarea.style.height 	= textarea.scrollHeight + 'px';
  	return;
  }

}
