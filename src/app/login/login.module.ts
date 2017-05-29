import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/Forms';
import { NotificationService } from '../core/services/notification.service';
import { AuthenService } from '../core/services/authen.service';

//it thi viet trong login.module luon
export const routes: Routes = [
  //login
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [ AuthenService, NotificationService ],
  declarations: [LoginComponent],
})
export class LoginModule { }
