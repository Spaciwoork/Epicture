import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-login_in',
  templateUrl: 'login_in.html'
})
export class login_inPage {

  identifiant: string;
  password: string;

  constructor(public navCtrl: NavController, private navParams: NavParams) {
    this.identifiant = navParams.get('identifiant');
    this.password = navParams.get('password');

    console.log(this.identifiant);
    console.log(this.password);
  }
}

