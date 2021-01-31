import { HttpClientModule } from '@angular/common/http';

import { UserService } from '../core/services/user.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { UserComponent } from './user/user.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    UserComponent
  ],
  providers: [UserService],
})
export class ComponentsModule { }
