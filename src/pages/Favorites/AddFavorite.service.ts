import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { DataClient } from "../Connection/dataClient";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AddFavoriteService {
  private searchUrl='https://api.imgur.com/3/image/';
  private endpoint = '/favorite';
  private finalurl;
  public data;

  constructor(private http: Http, public dataClient: DataClient){}

  addingfavorite(id, token):Promise<any> {
    console.log(token);
    let headers = new Headers({'Authorization': 'Bearer ' + this.dataClient.access_token});
    let options = new RequestOptions({ headers: headers });
    this.finalurl = this.searchUrl + id + this.endpoint;
    console.log(this.finalurl);
    return this.http.post(this.searchUrl + id + this.endpoint, '', options)
      .toPromise().then(this.extractData).catch(this.handleError);
  }

  private extractData(res: Response) {
    let responseData = res.json();
    console.log(responseData.data);
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
