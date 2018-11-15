import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class SearchService {
  private searchUrl='https://api.imgur.com/3/gallery/search/top/';
  public data;

  constructor(private http: Http){}

  search(query: string, page: string): Promise<any>{
    let clientId = 'd66c3cd99090df2';
    let headers = new Headers({'Authorization': 'Client-ID ' + clientId});
    let options = new RequestOptions({ headers: headers });

    if (query != undefined)
        query = '?q=' + query;
    else
      query = '';
    console.log(this.searchUrl + page + query);
    return this.http.get(this.searchUrl + query, options)
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
