import { Injectable } from '@angular/core';


import 'rxjs/add/operator/toPromise';

@Injectable()
export class ConnectionService {
  private baseUrl='https://api.imgur.com/';
  public data;
  public token;


  connection() {
      let browserRef = open(this.baseUrl + 'oauth2/authorize?client_id=24753a039b8a2e6&response_type=token', '_self', 'location=no');
      browserRef.addEventListener("loadstart", (event: any) => {
        console.log("34567");
        if ((event.url).indexOf('access_token=') !== -1) {
          this.token = event.url.slice(event.url.indexOf('access_token=') + 'access_token='.length);
          // here is your token, now you can close the InAppBrowser
          browserRef.close();
          return (this.token)
        }
        else {
          console.log("ERROR");
        }
      })
    }
}
