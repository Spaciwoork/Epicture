import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class getrefreshtoken {
  private getrefreshtokenUrl='https://api.imgur.com/oauth2/token';
  public data;

  constructor(private http: Http){}

  getTokenRefresh(): Promise<any>{
    let clientId = '24753a039b8a2e6';
    let headers = new Headers({'Authorization': 'Client-ID ' + clientId});
    let options = new RequestOptions({ headers: headers });

    return this.http.get(this.getrefreshtokenUrl, options)
      .toPromise().then(this.extractData).catch(this.handleError);
  }
  private extractData(res: Response) {
    console.log(res);
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
