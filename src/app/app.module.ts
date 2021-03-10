import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { Angulartics2Module } from 'angulartics2';
import { MarkdownModule } from 'ngx-markdown';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatFabMenuModule } from '@angular-material-extensions/fab-menu';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,

    MatButtonToggleModule,
    MatCardModule,
    MatRadioModule,
    MatSlideToggleModule,

    FlexLayoutModule,
    Angulartics2Module.forRoot(),
    MarkdownModule.forRoot(),

    MatFabMenuModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
