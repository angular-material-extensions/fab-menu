import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {speedDialFabAnimations} from './mat-fab-menu.animations';
import {ThemePalette} from '@angular/material';

export interface MatFabMenu {
  id: number;
  icon?: string; // please use either icon or imgUrl
  imgUrl?: string; // please use either icon or imgUrl
  tooltip?: string;
  color?: ThemePalette;
  iconColor?: ThemePalette;
}

export type MatFabMenuDirection = 'top' | 'bottom' | 'left' | 'right';

@Component({
  selector: 'mat-fab-menu',
  templateUrl: 'mat-fab-menu.component.html',
  styleUrls: ['mat-fab-menu.component.scss'],
  animations: speedDialFabAnimations
})
export class MatFabMenuComponent implements OnInit {

  @Input()
  fabButtons: MatFabMenu[];

  @Input()
  icon = 'add';

  @Input()
  direction: MatFabMenuDirection = 'top';

  @Input()
  color: ThemePalette = 'accent';

  @Input()
  isActive: boolean;

  @Input()
  disabled: boolean;

  // tslint:disable-next-line:no-output-on-prefix
  @Output()
  onFabMenuItemSelected: EventEmitter<string | number> = new EventEmitter<string | number>();

  layout: any;
  layout2: any;

  constructor() {
  }

  ngOnInit(): void {
    console.log('direction', this.direction);
    switch (this.direction) {
      case 'top':
        this.layout = 'column-reverse';
        this.layout2 = 'column-reverse';
        break;

      case 'bottom':
        this.layout = 'column';
        this.layout2 = 'column';
        break;

      case 'left':
        this.layout = 'row-reverse';
        this.layout2 = 'row-reverse';
        break;

      case 'right':
        this.layout = 'row';
        this.layout2 = 'row';
        break;
    }
  }
}
