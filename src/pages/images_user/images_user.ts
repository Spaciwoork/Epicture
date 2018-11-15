import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ImagesUserService} from './images_user.service'
import {DataClient} from "../Connection/dataClient";

@Component({
  selector: 'page-imagesuser',
  templateUrl: 'images_user.html'
})
export class ImagesUserPage {
  query: string;
  data: Array<{}>;
  errorMessage: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public imagesUserService: ImagesUserService, public dataClient: DataClient) {
    this.data = [];
    this.search();
  }
  public search() {
    //console.log(this.dataClient);
    //this.searchService.
    this.imagesUserService.search(this.query).then(
      data => {
        console.log(data);
        let i = 0;
        let images = Array<{}>();
        while (i < data.length){
          if (data[i].is_album == false) {
            if (data[i].link.search(".mp4") == -1) {
              data[i].video = 0;
            }
            else {
              data[i].video = 1;
              console.log(data[i]);
            }
            images.push(data[i]);
            //console.log(data[i].id);
          }
          if (data[i].images != undefined){
            data[i].images[0].title = data[i].title;
            //console.log(data[i].images[0].link.search(".mp4"));
            if (data[i].images[0].link.search(".mp4") == -1)
              data[i].images[0].video = 0;
            else {
              console.log(data[i].images[0])
              data[i].images[0].video = 1;
            }
            images.push(data[i].images[0]);
          }
          i++;
        }
        this.data = data;
        console.log(this.data)
      },
      error =>this.errorMessage = <any>error

    );
  }
  delete(balise) {
    console.log(balise);
  }
  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ImagesUserPage, {
      item: item
    });
  }
}
