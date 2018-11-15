import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { DataClient } from "../Connection/dataClient";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class FavoritesService {
  private searchUrl='https://api.imgur.com/3/account/';
  private endpointsearch='/gallery_favorites';
  private finalUrl;
  public data;
  public token;

  constructor(private http: Http, public dataClient: DataClient){}

  favorite(): Promise<any>{
    this.finalUrl = this.searchUrl + this.dataClient.account_username + this.endpointsearch;
    let clientId = '24753a039b8a2e6';
    let headers = new Headers({'Authorization': 'Client-ID ' + clientId});
    let options = new RequestOptions({ headers: headers });


    return this.http.get(this.finalUrl, options)
      .toPromise().then(this.extractData).catch(this.handleError);
  }
  private extractData(res: Response) {
    let responseData = res.json();
    console.log("BITEEEEE");
    console.log(responseData);
    //console.log(responseData.data);
    //this.data = responseData.data;
    return responseData.data || {};
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    }
    else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Promise.reject(errMsg);
  }
}
