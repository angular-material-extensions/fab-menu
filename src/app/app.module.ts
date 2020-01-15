import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Angulartics2Module} from 'angulartics2';
import {MarkdownModule} from 'ngx-markdown';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import {MatFabMenuModule} from '@angular-material-extensions/fab-menu';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    Angulartics2Module.forRoot(),
    MarkdownModule.forRoot(),
    MatFabMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
