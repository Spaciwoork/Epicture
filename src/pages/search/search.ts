import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {SearchService} from './search.service'
import {DataClient} from "../Connection/dataClient";
import {favoritesPage} from "../Favorites/Favorites";
import {AddFavoriteService} from "../Favorites/AddFavorite.service";

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  query: string;
  data: Array<{}>;
  errorMessage: string;
  private page;
  constructor(public navCtrl: NavController, public navParams: NavParams, public searchService: SearchService, public dataClient: DataClient, public addfavoriteservice: AddFavoriteService) {
    this.data = [];
  }
  public search() {
    this.searchService.search(this.query, this.page).then(
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
          }
          if (data[i].images != undefined){
            data[i].images[0].title = data[i].title;
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
        console.log(this.page);
        this.data = images;
        this.page += 1;
      },
      error =>this.errorMessage = <any>error

    );
  }
  itemTapped(event, item) {
    this.navCtrl.push(SearchPage, {
      item: item
    });
  }
  doInfinite(infiniteScroll) {
    this.search();
    infiniteScroll.complete();
  }
}
