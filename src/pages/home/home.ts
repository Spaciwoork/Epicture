import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { ConnectionOauth } from '../Connection/connection';
import { DataClient } from '../Connection/dataClient';
import {SearchService} from '../search/search.service';
import {HomeService} from './home.service';
import {AddFavoriteService} from "../Favorites/AddFavorite.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  public access_token;
  public expires_in;
  public token_type;
  public refresh_token;
  public account_username;
  public account_id;
  public errorMessage;
  private page;

  public section;
  public sort;
  public window;

  query: string;
  data: Array<{}>;

  public token;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public dataClient: DataClient, public homeService:HomeService, public addfavoriteservice:AddFavoriteService) {
    this.page = 0;
    dataClient.access_token = this.getUrlParameter('access_token');
    dataClient.expires_in = this.getUrlParameter('expires_in');
    dataClient.token_type = this.getUrlParameter('token_type');
    dataClient.refresh_token = this.getUrlParameter('refresh_token');
    dataClient.account_username = this.getUrlParameter('account_username');
    dataClient.account_id = this.getUrlParameter('account_id');
    this.section = "hot";
    this.sort = "viral";
    this.window =  "day";
    this.data = [];
    this.search();
  }
  private getUrlParameter(sParam) {
    let pos = window.location.href.search(sParam);
    let href = window.location.href;

    href = href.substring(pos + sParam.length+1);
    pos = href.search('&');
    if (pos != -1)
      href = href.substring(0, pos);
    return (href);
  };
  connect() {
    this.navCtrl.push(ConnectionOauth);
  }
  public search() {
    this.homeService.search(this.query, this.section, this.sort, this.window, this.page).then(
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
              data[i].images[0].video = 1;
            }
            images.push(data[i].images[0]);
          }
          i++;
        }
        console.log(images);
        this.data = images;
        this.page += 1;
      },
      error =>this.errorMessage = <any>error

    );
  }
  add_to_favorite(balise) {
    console.log(balise);
  }
  doInfinite(infiniteScroll) {
    this.search();
    infiniteScroll.complete();
  }

}

