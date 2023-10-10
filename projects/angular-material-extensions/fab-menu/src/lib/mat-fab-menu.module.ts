import { NgModule } from '@angular/core';
import { MatFabMenuComponent } from './mat-fab-menu.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatMiniFabMenuComponent } from './mat-mini-fab-menu/mat-mini-fab-menu.component';

@NgModule({
  declarations: [MatFabMenuComponent, MatMiniFabMenuComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule, MatTooltipModule],
  exports: [MatFabMenuComponent, MatMiniFabMenuComponent],
})
export class MatFabMenuModule {}
