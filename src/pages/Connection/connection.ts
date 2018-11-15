import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {login_inPage} from "../login_in/login_in";
import { ConnectionService } from "./connection.service";
import { getrefreshtoken } from "./getRefreshToken";

@Component({
  selector: 'page-connection',
  templateUrl: 'connection.html'
})
export class ConnectionOauth {
  data: Array<{id: string}>;
  errorMessage: string;
  public token;

  constructor(public navCtrl: NavController, public navParams: NavParams, public connectionService: ConnectionService) {
    this.data = [];
  }
  public oauthreq() {
    //this.searchService.
    this.token = this.connectionService.connection();
    return (this.token)
  }
}

/*export class ConnectionPage {

  identifiant: string;
  password: string;

  constructor(public navCtrl: NavController) {
    console.log("connection ook");
  }
  get_login() {
    console.log("biloute");
    this.navCtrl.push(login_inPage, {
      identifiant: this.identifiant,
      password: this.password
    });
  }
}*/


