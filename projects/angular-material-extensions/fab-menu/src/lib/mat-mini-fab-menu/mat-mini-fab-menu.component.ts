import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ThemePalette } from '@angular/material/core';

import { speedDialFabAnimations } from '../animations/menu.animation';

import { MatFabMenu, MatFabMenuDirection } from '../models/mat-fab-menu.model';

@Component({
  selector: 'mat-mini-fab-menu',
  templateUrl: './mat-mini-fab-menu.component.html',
  styleUrls: ['./mat-mini-fab-menu.component.scss'],
  animations: speedDialFabAnimations,
})
export class MatMiniFabMenuComponent implements OnInit, OnChanges {
  @Input() fabButtons: MatFabMenu[];
  @Input() icon = 'add';
  @Input() direction: MatFabMenuDirection = 'top';
  @Input() color: ThemePalette = 'accent';
  @Input() isActive: boolean;
  @Input() disabled: boolean;
  @Input() closeAfterSelection = true;

  @Output() onFabMenuItemSelected = new EventEmitter<string | number>();

  layout: string;
  layout2: string;

  constructor() {}

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

  private adjustLayout() {
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

  selectFabMenu(fab: MatFabMenu) {
    this.onFabMenuItemSelected.emit(fab.id);
    if (this.closeAfterSelection) {
      this.isActive = false;
    }
  }
}
