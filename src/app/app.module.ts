import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { GiftsPage } from '../pages/gifts/gifts';
import { OrdersPage } from '../pages/orders/orders';
import { OrderDetailsPage } from '../pages/order-details/order-details';
import { ProfilePage } from '../pages/profile/profile';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { CheckoutPage } from '../pages/checkout/checkout';
import { CheckoutSuccessPage } from '../pages/checkout-success/checkout-success';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UserServiceProvider } from '../providers/user-service/user-service';
import { GiftServiceProvider } from '../providers/gift-service/gift-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    GiftsPage,
    OrdersPage,
    OrderDetailsPage,
    ProfilePage,
    LoginPage,
    RegisterPage,
    CheckoutPage,
    CheckoutSuccessPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    GiftsPage,
    OrdersPage,
    OrderDetailsPage,
    ProfilePage,
    LoginPage,
    RegisterPage,
    CheckoutPage,
    CheckoutSuccessPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserServiceProvider,
    GiftServiceProvider
  ]
})
export class AppModule {}
