import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {speedDialFabAnimations} from './mat-fab-menu.animations';
import {ThemePalette, TooltipPosition} from '@angular/material';

export interface MatFabMenu {
  id: string | number;
  icon?: string; // please use either icon or imgUrl
  iconColor?: ThemePalette;
  imgUrl?: string; // please use either icon or imgUrl
  tooltip?: string;
  tooltipPosition?: TooltipPosition;
  color?: ThemePalette;
}

export type MatFabMenuDirection = 'top' | 'bottom' | 'left' | 'right';

@Component({
  selector: 'mat-fab-menu',
  templateUrl: 'mat-fab-menu.component.html',
  styleUrls: ['mat-fab-menu.component.scss'],
  animations: speedDialFabAnimations
})
export class MatFabMenuComponent implements OnInit, OnChanges {

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
    this.adjustLayout();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.direction && !changes.direction.firstChange) {
      this.direction = changes.direction.currentValue;
      this.adjustLayout();
    }

    if (changes.color && !changes.color.firstChange) {
      this.color = changes.color.currentValue;
    }

    if (changes.fabButtons && !changes.fabButtons.firstChange) {
      this.fabButtons = changes.fabButtons.currentValue;
    }
  }

  adjustLayout() {
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

  toggle() {
    this.isActive = !this.isActive;
  }
}
