import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {SearchService} from './search.service'
import {DataClient} from "../Connection/dataClient";

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  query: string;
  data: Array<{}>;
  errorMessage: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public searchService: SearchService, public dataClient: DataClient) {
    this.data = [];
  }
  public search() {
    //console.log(this.dataClient);
    //this.searchService.
    this.searchService.search(this.query).then(
      data => {
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
        this.data = images;
        //console.log(data)
      },
      error =>this.errorMessage = <any>error

    );
  }
  add_to_favorite(balise) {
    console.log(balise);
  }
  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(SearchPage, {
      item: item
    });
  }
}
