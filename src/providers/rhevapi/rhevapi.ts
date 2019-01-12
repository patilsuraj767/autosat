import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RhevapiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RhevapiProvider {

   body = JSON.stringify({username: 'rhevadmin@gsslab.pnq2.redhat.com', password: 'RedHat1!'});
  baseUrl:string = "http://localhost";
  //baseUrl:string = "https://lab-rhevm.gsslab.pnq2.redhat.com/ovirt-engine/api";
  data: string = "{'username':'rhevadmin@gsslab.pnq2.redhat.com', 'password':'RedHat1!'}"

  

  constructor(public http: HttpClient) {
    console.log('Hello RhevapiProvider Provider');
  }


    getdata() {
      let headers = new HttpHeaders();
      headers = headers.append("Authorization", "Basic " + btoa("rhevadmin@gsslab.pnq2.redhat.com:RedHat1!"));
      headers = headers.append("Content-Type", "application/json");
      return new Promise(resolve => {
        //, {headers: headers}
        this.http.get(this.baseUrl+'/tmp' ).subscribe(data => {
          resolve(data);
        }, err => {
          resolve(err)
          console.log(err);
        });
      });
    }

}
