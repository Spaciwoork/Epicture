import { Component } from '@angular/core';
import {NavController, AlertController, NavParams} from 'ionic-angular';
import { FavoritesService} from "./Favorites.service";
import {DataClient} from "../Connection/dataClient";
import {AddFavoriteService} from "./AddFavorite.service";

@Component({
  selector: 'page-favorite',
  templateUrl: 'Favorites.html'
})

export class favoritesPage {
  query: string;
  data: Array<{id: string}>;
  errorMessage: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public favoriteService: FavoritesService,
              public dataClient: DataClient, public addfavoriteservice: AddFavoriteService) {
    this.data = [];
  }
  public favorites() {
    this.favoriteService.favorite().then(
      data => {
        this.data = data;
        this.data = data;
        let i = 0;
        console.log(this.dataClient.all_favorites);
        while (i < this.data.length)
        {
          this.dataClient.all_favorites.push(this.data[i].id);
          i++;
        }

      },
      error =>this.errorMessage = <any>error

    );
  }
  public addfavorite() {
    this.addfavoriteservice.addingfavorite(this.query, this.dataClient.refresh_token)
  }
}

