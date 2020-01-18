import {Component} from '@angular/core';
import {MatFabMenu, MatFabMenuDirection} from '@angular-material-extensions/fab-menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fab-menu';

  direction: MatFabMenuDirection = 'top';

  fabButtons: MatFabMenu[] = [
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
      imgUrl: 'assets/countrys-flags/svg/canada.svg'
    },
    {
      id: 2,
      imgUrl: 'assets/countrys-flags/svg/germany.svg'
    },
    {
      id: 3,
      imgUrl: 'assets/countrys-flags/svg/france.svg'
    },
    {
      id: 4,
      imgUrl: 'assets/countrys-flags/svg/lebanon.svg'
    },
  ];

  fabNumbers: MatFabMenu[] = [
    {
      id: 1,
      imgUrl: 'assets/countrys-flags/svg/canada.svg'
    },
    {
      id: 2,
      imgUrl: 'assets/countrys-flags/svg/germany.svg'
    },
    {
      id: 3,
      imgUrl: 'assets/countrys-flags/svg/france.svg'
    },
    {
      id: 4,
      imgUrl: 'assets/countrys-flags/svg/lebanon.svg'
    },
  ];

  logDirection($event: any) {
    console.log('direction changed', this.direction, $event);
  }
}
