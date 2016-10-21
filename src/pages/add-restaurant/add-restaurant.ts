import { Component } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';
import { AddRestaurantInfo } from '../add-restaurant-info/add-restaurant-info';
@Component({
  selector: 'page-add-restaurant',
  templateUrl: 'add-restaurant.html'
})
export class AddRestaurant {

  public companyId:number;
  public name:string;
  public password:string;
  public valid_password:string;

  constructor(public nav: NavController, private alertController: AlertController) {

  }
  showPasswordError() {
    var alert = this.alertController.create({
      title: 'Password error',
      subTitle:'Password does not match the confirm password',
      buttons: ['OK']
    });
    alert.present();
  }

  nextStep(){
    if(this.password != this.valid_password){
      this.showPasswordError();
    }
    this.nav.push(AddRestaurantInfo);
  }
}