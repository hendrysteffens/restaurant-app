import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the ListRestaurant page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-list-restaurant',
  templateUrl: 'list-restaurant.html'
})
export class ListRestaurant {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ListRestaurant Page');
  }

}
