import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../core/services/notification.service';
import { AuthenService } from '../core/services/authen.service';
import { UrlConstants } from '../core/common/url.constants';
import { MessageConstants } from '../core/common/message.constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading = false;
  model: any = {};
  returnUrl: string;
  constructor(private _authenService: AuthenService,private _notificationService: NotificationService, private _router: Router) { }

  ngOnInit() {
  }
  login() {
    this.loading = false;
    // Binding username va password từ model
    this._authenService.login(this.model.username, this.model.password).subscribe(data => {
      this._router.navigate([UrlConstants.LOGIN])
    }, error => {
      this._notificationService.printErrorMessage(MessageConstants.SYSTEM_ERROR);
      this.loading = false;
    });
  }
}
