import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { AddRestaurant } from '../pages/add-restaurant/add-restaurant';
import { AddRestaurantInfo } from '../pages/add-restaurant-info/add-restaurant-info';
import { ListRestaurant } from '../pages/list-restaurant/list-restaurant';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    AddRestaurant,
    AddRestaurantInfo,
    ListRestaurant
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    AddRestaurant,
    AddRestaurantInfo,
    ListRestaurant
  ],
  providers: []
})
export class AppModule {}
