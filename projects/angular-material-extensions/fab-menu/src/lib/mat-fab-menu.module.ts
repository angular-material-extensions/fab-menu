import {NgModule} from '@angular/core';
import {MatFabMenuComponent} from './mat-fab-menu.component';
import {MatButtonModule} from '@angular/material/button';
import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [MatFabMenuComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    FlexLayoutModule
  ],
  exports: [MatFabMenuComponent]
})
export class MatFabMenuModule {
}
