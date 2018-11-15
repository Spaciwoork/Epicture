import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import {DataClient} from "../Connection/dataClient";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ImagesUserService {
  private searchUrl = 'https://api.imgur.com/3/account/'; // LEpitechTEpitech/images/0';
  public data;

  constructor(private http: Http, private dataClient: DataClient){}

  search(query: string): Promise<any>{
    let clientId = 'd66c3cd99090df2';
    let headers = new Headers({'Authorization': 'Bearer ' + this.dataClient.access_token});
    let options = new RequestOptions({ headers: headers });
    console.log(this.searchUrl + this.dataClient.account_username + '/images/0');
    return this.http.get(this.searchUrl + this.dataClient.account_username + '/images/0', options)
      .toPromise().then(this.extractData).catch(this.handleError);
  }
  private extractData(res: Response) {
    let responseData = res.json();
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
      errMsg =  error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Promise.reject(errMsg);
  }
}
