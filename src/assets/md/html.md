```html
<mat-fab-menu
  color="primary"
  [fabButtons]="fabButtonsRandom"
></mat-fab-menu>

<mat-mini-fab-menu
  color="primary"
  [fabButtons]="fabButtonsRandom"
></mat-mini-fab-menu>
```

```typescript
import { MatFabMenu } from '@angular-material-extensions/fab-menu';

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
```
