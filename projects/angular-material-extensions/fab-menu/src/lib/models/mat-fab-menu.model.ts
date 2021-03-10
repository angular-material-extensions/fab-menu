import { ThemePalette } from '@angular/material/core';
import { TooltipPosition } from '@angular/material/tooltip';

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
