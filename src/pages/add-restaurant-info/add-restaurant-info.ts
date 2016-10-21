import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import {  GoogleMap, GoogleMapsEvent, GoogleMapsLatLng } from 'ionic-native';
/*
  Generated class for the AddRestaurantInfo page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-add-restaurant-info',
  templateUrl: 'add-restaurant-info.html'
})
export class AddRestaurantInfo {
  map: GoogleMap;
  constructor(public navCtrl: NavController, public platform: Platform) {
    platform.ready().then(() => {
            this.loadMap();
    });
  }

  loadMap(){
 
        let location = new GoogleMapsLatLng(-34.9290,138.6010);
 
        this.map = new GoogleMap('map', {
          'backgroundColor': 'white',
          'controls': {
            'compass': true,
            'myLocationButton': true,
            'indoorPicker': true,
            'zoom': true
          },
          'gestures': {
            'scroll': true,
            'tilt': true,
            'rotate': true,
            'zoom': true
          },
          'camera': {
            'latLng': location,
            'tilt': 30,
            'zoom': 15,
            'bearing': 50
          }
        });

  
}

}
