import {NgModule} from '@angular/core';
import {MatFabMenuComponent} from './mat-fab-menu.component';
import {MatLegacyButtonModule as MatButtonModule} from '@angular/material/legacy-button';
import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatLegacyTooltipModule as MatTooltipModule} from '@angular/material/legacy-tooltip';
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
