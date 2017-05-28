import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { SystemConstants } from '../common/system.constants';
import { AuthenService } from './authen.service';
import { Observable } from 'rxjs/Observable';
import { MessageConstants } from '../common/message.constants';
import { NotificationService } from './notification.service';
import { UtilityService } from './utility.service'

@Injectable()
export class DataService {
  private headers: Headers;
  constructor(private _http: Http, private _router: Router, private _authenservice: AuthenService, private _notificationService: NotificationService, private _utilityService: UtilityService) { }

  //dang nhap xong se tra ve 1 token, token nay se duoc lay ra gan vao headers
  //
  get(url: string) {
    this.headers.delete('Authorization');
    this.headers.append('Authorization', 'Bearer ' + this._authenservice.getLoggedInUser().access_token)
    return this._http.get(SystemConstants.BASE_API + url + { headers: this.headers }).map(this.extractData)
  }
  //add
  post(url: string, data?: any) {
    this.headers.delete('Authorization');
    this.headers.append('Authorization', 'Bearer ' + this._authenservice.getLoggedInUser().access_token)
    return this._http.post(SystemConstants.BASE_API + url, data, { headers: this.headers }).map(this.extractData)
  }
  //update
  put(url: string, data?: any) {
    this.headers.delete('Authorization');
    this.headers.append('Authorization', 'Bearer ' + this._authenservice.getLoggedInUser().access_token)
    return this._http.put(SystemConstants.BASE_API + url, data, { headers: this.headers }).map(this.extractData)
  }
  delete(url: string, key: string, any: string, id: string) {
    this.headers.delete('Authorization');
    this.headers.append('Authorization', 'Bearer ' + this._authenservice.getLoggedInUser().access_token)
    return this._http.put(SystemConstants.BASE_API + url, "/?" + key + "=" + id, { headers: this.headers })
      .map(this.extractData)
  }
  postFile(url: string, data?: any) {
    let newHeaders = new Headers();
    newHeaders.append('Authorization', 'Bearer ' + this._authenservice.getLoggedInUser().access_token)
    return this._http.post(SystemConstants.BASE_API + url, data, { headers: this.headers }).map(this.extractData)
  }
  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }
  //thong bao loi
  public handleError(error: any) {
    if (error.status == 401) {
      localStorage.removeItem(SystemConstants.CURRENT_USER)
      this._notificationService.printErrorMessage(MessageConstants.DELETE_OK_MSG);
      this._utilityService.navigateToLogin();
    }
    else {
      let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Lỗi hệ thống';
      this._notificationService.printErrorMessage(errMsg);

      return Observable.throw(errMsg);
    }
  }
}

