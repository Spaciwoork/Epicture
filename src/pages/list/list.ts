import { Component } from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  public access_token;
  public expires_in;
  public token_type;
  public refresh_token;
  public account_username;
  public account_id;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for (let i = 1; i < 15; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
    this.access_token = this.getUrlParameter('account_id');
    this.expires_in = this.getUrlParameter('expires_in');
    this.token_type = this.getUrlParameter('token_type');
    this.refresh_token = this.getUrlParameter('refresh_token');
    this.account_username = this.getUrlParameter('account_username');
    this.account_id = this.getUrlParameter('account_id');
    console.log(this);
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
  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }
}
