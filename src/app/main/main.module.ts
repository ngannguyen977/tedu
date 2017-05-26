import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FunctionComponent } from './function/function.component';
import { ProductComponent } from './product/product.component';
import { MainComponent } from './main.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { RoleComponent } from './role/role.component';

import { mainRoutes } from './main.routes';
import { Routes, RouterModule } from '@angular/router';
import {UserModule} from './user/user.module';

@NgModule({
  imports: [
    CommonModule,
    UserModule,
    RouterModule.forChild(mainRoutes)
  ],
  declarations: [HomeComponent, FunctionComponent, ProductComponent, ProductCategoryComponent, RoleComponent, MainComponent]
})
export class MainModule { }
