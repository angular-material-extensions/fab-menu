import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatFabMenuComponent } from './mat-fab-menu/mat-fab-menu.component';
import { MatMiniFabMenuComponent } from './mat-mini-fab-menu/mat-mini-fab-menu.component';

@NgModule({
  declarations: [MatFabMenuComponent, MatMiniFabMenuComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    FlexLayoutModule,
  ],
  exports: [MatFabMenuComponent, MatMiniFabMenuComponent],
})
export class MatFabMenuModule {}
