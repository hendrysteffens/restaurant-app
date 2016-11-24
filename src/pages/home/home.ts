import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { AddRestaurant } from '../add-restaurant/add-restaurant';

/*

                                _/|__
            _,-------,        _/ -|  \_     /~>.
         _-~ __--~~/\ |      (  \   /  )   | / |
      _-~__--    //   \\      \ *   * /   / | ||   
   _-~_--       //     ||      \     /   | /  /|  
  ~ ~~~~-_     //       \\     |( " )|  / | || /  
          \   //         ||    | VWV | | /  ///  
    |\     | //           \\ _/      |/ | ./ |
    | |    |// __         _-~         \// |  /
   /  /   //_-~  ~~--_ _-~  /          |\// /  
  |  |   /-~        _-~    (     /   |/ / /   
 /   /           _-~  __    |   |____|/     
|   |__         / _-~  ~-_  (_______  `\
|      ~~--__--~ /  _     \        __\)))
 \               _-~       |     ./  \    
  ~~--__        /         /    _/     |
        ~~--___/       _-_____/      /            
         _____/     _-_____/      _-~             
      /^<  ___       -____         -____          
         ~~   ~~--__      ``\--__       ``\
                    ~~--\)\)\)   ~~--\)\)\) a rich
*/

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  propriedade:String;
  constructor(public navCtrl: NavController) {
    this.propriedade = "aletoria";
  }
  
  ionViewDidLoad() {
    console.log('Hello Page');
  }
  addRestaurant(){
    this.navCtrl.push(AddRestaurant);
  }
  
  showRestaurant(){

  }
  click() {
    this.propriedade = 'haha';
  }

}
