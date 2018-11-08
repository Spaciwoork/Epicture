import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {MyImageService} from './my_image.service'
import {DataClient} from "../Connection/dataClient";

@Component({
  selector: 'page-my_image',
  templateUrl: 'my_image.html'
})
export class MyImagePage {
  query: string;
  data: Array<{id: string}>;
  errorMessage: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public searchService: MyImageService, public dataClient: DataClient) {
    this.data = [];
  }
   public search() {
    console.log(this.dataClient);
    //this.searchService.
     this.searchService.search(this.query).then(
      data => {
        console.log(data)
       //this.data = data;
       console.log(data)
     },
      error =>this.errorMessage = <any>error

    );
  }
  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(MyImagePage, {
      item: item
    });
  }
}
