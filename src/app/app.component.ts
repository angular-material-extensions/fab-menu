import {Component, OnInit} from '@angular/core';
import {MatFabMenu, MatFabMenuDirection} from '@angular-material-extensions/fab-menu';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'fab-menu';

  direction: MatFabMenuDirection = 'top';

  color: ThemePalette = 'primary';
  exampleIndex = 1;
  exampleFabButtons: MatFabMenu[];
  layout = 'end end';

  fabButtonsRandom: MatFabMenu[] = [
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
    },
  ];

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
    },
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
    },
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
    },
  ];

  ngOnInit(): void {
    this.exampleFabButtons = this.fabProfessions;
  }

  logDirection() {
    if (this.direction === 'bottom') {
      this.layout = 'start end';
    } else if (this.direction === 'right') {
      this.layout = 'start start';
    } else {
      this.layout = 'end end';
    }
  }

  onExampleChanged($event: number) {
    console.log('on example changed', $event);
    switch ($event) {
      case 1:
        this.exampleFabButtons = this.fabProfessions;
        return;

      case 2:
        this.exampleFabButtons = this.fabCountries;
        return;
      case 3:
        this.exampleFabButtons = this.fabNumbers;
        return;
      case 4:
        this.exampleFabButtons = this.fabButtonsRandom;
        return;
    }
  }
}
