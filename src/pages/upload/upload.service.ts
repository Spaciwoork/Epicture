import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import {DataClient} from "../Connection/dataClient";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UploadService {
  private uploadUrl='https://api.imgur.com/3/image';

  constructor(private http: Http, public dataclient: DataClient){}

  uploaddata(image: string): Promise<any>{
    let clientId = '24753a039b8a2e6';
    let headers = new Headers({'Authorization': 'Bearer ' + this.dataclient});
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.uploadUrl + '?album', {image}, options)
      .toPromise().then(this.extractData).catch(this.handleError);
  }
  private extractData(res: Response) {
    let responseData = res.json();
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
