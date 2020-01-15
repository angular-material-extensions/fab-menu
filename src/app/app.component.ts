import {Component} from '@angular/core';
import {MatFabMenu} from '@angular-material-extensions/fab-menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fab-menu';

  fabButtons: MatFabMenu[] = [
    {
      id: 1,
      icon: 'home'
    },
    {
      id: 2,
      icon: 'location'
    },
    {
      id: 3,
      icon: 'person'
    },
    {
      id: 4,
      icon: 'wifi'
    },
  ];
}
