import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { Angulartics2Module } from 'angulartics2';
import { MarkdownModule } from 'ngx-markdown';

import { MatFabMenuModule } from '@angular-material-extensions/fab-menu';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,

    MatButtonToggleModule,
    MatCardModule,
    MatRadioModule,
    MatSlideToggleModule,

    Angulartics2Module.forRoot(),
    MarkdownModule.forRoot(),

    MatFabMenuModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
