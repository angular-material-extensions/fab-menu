import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

import {
  MatFabMenu,
  MatFabMenuDirection,
  MatFabMenuType
} from '@angular-material-extensions/fab-menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'fab-menu';

  fabProfessions: MatFabMenu[] = [
    {
      id: 1,
      imgUrl: 'assets/professions/svg/001-accountant.svg'
    },
    {
      id: 2,
      imgUrl: 'assets/professions/svg/005-accountant.svg'
    },
    {
      id: 3,
      imgUrl: 'assets/professions/svg/013-biochemist.svg'
    },
    {
      id: 4,
      imgUrl: 'assets/professions/svg/017-engineer.svg'
    }
  ];
  fabCountries: MatFabMenu[] = [
    {
      id: 1,
      imgUrl: 'assets/countrys-flags/svg/canada.svg',
      tooltip: 'canada',
      tooltipPosition: 'before'
    },
    {
      id: 2,
      imgUrl: 'assets/countrys-flags/svg/germany.svg',
      tooltip: 'germany',
      tooltipPosition: 'before'
    },
    {
      id: 3,
      imgUrl: 'assets/countrys-flags/svg/france.svg',
      tooltip: 'france',
      tooltipPosition: 'before'
    },
    {
      id: 4,
      imgUrl: 'assets/countrys-flags/svg/lebanon.svg',
      tooltip: 'lebanon',
      tooltipPosition: 'before'
    }
  ];
  fabNumbers: MatFabMenu[] = [
    {
      id: 1,
      imgUrl: 'assets/numbers/svg/one.svg'
    },
    {
      id: 2,
      imgUrl: 'assets/numbers/svg/two.svg'
    },
    {
      id: 3,
      imgUrl: 'assets/numbers/svg/three.svg'
    },
    {
      id: 4,
      imgUrl: 'assets/numbers/svg/four.svg'
    },
    {
      id: 5,
      imgUrl: 'assets/numbers/svg/five.svg'
    }
  ];
  fabRandom: MatFabMenu[] = [
    {
      id: 1,
      icon: 'create'
    },
    {
      id: 2,
      icon: 'mail'
    },
    {
      id: 3,
      icon: 'file_copy'
    },
    {
      id: 4,
      icon: 'phone'
    }
  ];

  color: ThemePalette = 'primary';
  direction: MatFabMenuDirection = 'top';
  type: MatFabMenuType = 'fab';
  fabButtons: MatFabMenu[] = this.fabCountries;
  icons = 1;
  layout = 'end end';

  constructor() {}

  ngOnInit(): void {}

  onDirectionChanged($event: string): void {
    switch ($event) {
      case 'bottom':
        this.layout = 'start end';
        return;
      case 'right':
        this.layout = 'end start';
        return;
      default:
        this.layout = 'end end';
        return;
    }
  }

  onIconsChanged($event: number): void {
    switch ($event) {
      case 1:
        this.fabButtons = this.fabProfessions;
        return;
      case 2:
        this.fabButtons = this.fabCountries;
        return;
      case 3:
        this.fabButtons = this.fabNumbers;
        return;
      case 4:
        this.fabButtons = this.fabRandom;
        return;
    }
  }
}
