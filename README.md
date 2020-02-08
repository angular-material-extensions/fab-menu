<p align="center">
  <img alt="angular-material-extensions's logo"
   height="256px" width="256px" style="text-align: center;" 
   src="https://cdn.jsdelivr.net/gh/angular-material-extensions/fab-menu@master/assets/angular-material-extensions-logo.svg">
</p>

# @angular-material-extensions/fab-menu - Angular Material component that allow users to select a country or nationality with an autocomplete feature - Angular V9 supported incl. schematics

[![npm version](https://badge.fury.io/js/%40angular-material-extensions%2Ffab-menu.svg)](https://badge.fury.io/js/%40angular-material-extensions%2Ffab-menu)
[![npm demo](https://img.shields.io/badge/demo-online-ed1c46.svg)](https://angular-material-extensions.github.io/fab-menu)
[![docs: typedoc](https://img.shields.io/badge/docs-typedoc-4D0080.svg)](https://angular-material-extensions.github.io/fab-menu/doc/index.html)
[![Join the chat at https://gitter.im/angular-material-extensions/Lobby](https://badges.gitter.im/angular-material-extensions/Lobby.svg)](https://gitter.im/angular-material-extensions/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Build Status](https://travis-ci.org/angular-material-extensions/fab-menu.svg?branch=master)](https://travis-ci.org/angular-material-extensions/fab-menu)
[![codecov](https://codecov.io/gh/angular-material-extensions/fab-menu/branch/master/graph/badge.svg)](https://codecov.io/gh/angular-material-extensions/fab-menu)
[![dependency Status](https://david-dm.org/angular-material-extensions/fab-menu/status.svg)](https://david-dm.org/angular-material-extensions/fab-menu)
[![devDependency Status](https://david-dm.org/angular-material-extensions/fab-menu/dev-status.svg?branch=master)](https://david-dm.org/angular-material-extensions/fab-menu#info=devDependencies)
[![Greenkeeper Badge](https://badges.greenkeeper.io/angular-material-extensions/fab-menu.svg)](https://greenkeeper.io/)
[![license](https://img.shields.io/github/license/angular-material-extensions/fab-menu.svg?style=flat-square)](https://github.com/angular-material-extensions/fab-menu/blob/master/LICENSE)


<p align="center">
  <img alt="@angular-material-extensions/fab-menu demonstration" style="text-align: center;"
   src="https://raw.githubusercontent.com/angular-material-extensions/fab-menu/HEAD/assets/v1/ex1.gif">
</p>

<p align="center">
  <img alt="@angular-material-extensions/fab-menu demonstration" style="text-align: center;"
   src="https://raw.githubusercontent.com/angular-material-extensions/fab-menu/HEAD/assets/v1/ex2.gif">
</p>

## Built by and for developers :heart:
Do you have any question or suggestion ? Please do not hesitate to contact us!
Alternatively, provide a PR | open an appropriate issue [here](https://github.com/angular-material-extensions/fab-menu/issues)

If you like this project, support [angular-material-extensions](https://github.com/angular-material-extensions) 
by starring :star: and sharing it :loudspeaker:

## Table of Contents
- [Demo](#demo)
- [Components](#components)
- [Dependencies](#dependencies)
- [Installation](#installation)
- [API](#api)
- [Usage](#usage)
- [Run Demo App Locally](#run-demo-app-locally)
- [Other Angular Libraries](#other-angular-libraries)
- [Support](#support)
- [License](#license)

<a name="demo"/>

## [Demo](https://angular-material-extensions.github.io/fab-menu)

View all the directives and components in action at [https://angular-material-extensions.github.io/fab-menu](https://angular-material-extensions.github.io/fab-menu)

<a name="components"/>

## Library's components
- `<mat-fab-menu>` used to display the main component


---

<a name="dependencies"/>

## Dependencies
* [Angular](https://angular.io) developed and tested with `8.x`

---

<a name="installation"/>

##  [Installation](https://angular-material-extensions.github.io/fab-menu/getting-started)

## 1. Install via *ng add*. (Recommended)

If Angular Material Design is not setup, just run `ng add @angular/material` [learn more](https://material.angular.io/guide/getting-started)

Now add the library via the `angular schematics`
```shell
ng add @angular-material-extensions/fab-menu
```

## 2. Install via *npm*. (Alternative) 

Now install `@angular-material-extensions/fab-menu` via:
```shell
npm install --save @angular-material-extensions/fab-menu
```


### Import the library

If you installed the library via angular schematics, you can skip this step

Once installed you need to import the main module:
```js
import { MatFabMenuModule } from '@angular-material-extensions/fab-menu';
```

```typescript
import { MatFabMenuModule } from '@angular-material-extensions/fab-menu';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [MatFabMenuModule, ...],  
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

Other modules in your application like for lazy loading import ` MatSelectCountryModule ` into your feature module:


<a name="api"/>

## API

### `<mat-fab-menu>`  used to display the main component - [see the demo examples](https://angular-material-extensions.github.io/fab-menu/examples)

| option | bind  |  type  |   default    | description  |
|:-------------------|:--------:|:------:|:------------:|:-------------------------------------------------------------------------------------------------|    
| fabButtons      | `Input()`  | `MatFabMenu[]`    | - |  array of floating actions button as menu to render
| icon      | `Input()`  | `string`    | `add` |  material icon string e.g: home, mail, phone [see more](https://material.io/resources/icons/?style=baseline)
| direction      | `Input()`  | `MatFabMenuDirection`    | `top` |  the direction of buttons: `'top' | 'bottom' | 'left' | 'right';`
| color      | `Input()`  | `ThemePalette`    | `accent` |  the color of the main fab: primary, accent or warn
| isActive      | `Input()`  | `boolean`    | `falase` |  Whether the component is active
| disabled      | `Input()`  | `boolean`    | `false` |  Whether the component is disabled
| closeAfterSelection      | `Input()`  | `boolean`    | `true` | Close after selecting a fab menu item
| onFabMenuItemSelected  | `Output()` | `EventEmitter<string | number>`    | - | emits the selected button by id

### Methods

```typescript
@ViewChild('matFabMenu', { static: false }) matFabMenu: MatFabMenu;
```

`toggle()` will toggle the `isActive` property

Important interfaces or type

```typescript

import {ThemePalette, TooltipPosition} from '@angular/material';

interface MatFabMenu {
  id: string | number;
  icon?: string; // please use either icon or imgUrl
  iconColor?: ThemePalette;
  imgUrl?: string; // please use either icon or imgUrl
  tooltip?: string;
  tooltipPosition?: TooltipPosition;
  color?: ThemePalette;
}

type MatFabMenuDirection = 'top' | 'bottom' | 'left' | 'right';
```


<a name="usage"/>

## [Usage](https://angular-material-extensions.github.io/fab-menu)

```html
<mat-fab-menu color="primary" 
              [fabButtons]="fabButtonsRandom">
</mat-fab-menu>
```

```typescript
import {MatFabMenu} from '@angular-material-extensions/fab-menu';

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

try to use your own svg instead of material icons:

```typescript
import {MatFabMenu} from '@angular-material-extensions/fab-menu';

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
```

```html
<mat-fab-menu color="primary" 
              [fabButtons]="fabButtonsRandom">
</mat-fab-menu>
```

<p align="center">
  <img alt="@angular-material-extensions/fab-menu demonstration" style="text-align: center;"
   src="https://raw.githubusercontent.com/angular-material-extensions/fab-menu/HEAD/assets/v1/top.png">
</p>

```html
<mat-fab-menu color="primary" 
              direction="bottom"
              [fabButtons]="fabButtonsRandom">
</mat-fab-menu>
```

<p align="center">
  <img alt="@angular-material-extensions/fab-menu demonstration" style="text-align: center;"
   src="https://raw.githubusercontent.com/angular-material-extensions/fab-menu/HEAD/assets/v1/bottom.png">
</p>

```html
<mat-fab-menu color="primary" 
              direction="left"
              [fabButtons]="fabButtonsRandom">
</mat-fab-menu>
```

<p align="center">
  <img alt="@angular-material-extensions/fab-menu demonstration" style="text-align: center;"
   src="https://raw.githubusercontent.com/angular-material-extensions/fab-menu/HEAD/assets/v1/left.png">
</p>

```html
<mat-fab-menu color="primary" 
              direction="right"
              [fabButtons]="fabButtonsRandom">
</mat-fab-menu>
```

<p align="center">
  <img alt="@angular-material-extensions/fab-menu demonstration" style="text-align: center;"
   src="https://raw.githubusercontent.com/angular-material-extensions/fab-menu/HEAD/assets/v1/right.png">
</p>
<a name="run-demo-app-locally"/>

###  Run Demo App Locally


Build the library

after installing the dependencies with `npm i`

```bash
$ npm run build:lib
```

Serve the demo app

```bash
$ npm start
```



## Other Angular Libraries
- [ngx-auth-firebaseui](https://github.com/AnthonyNahas/ngx-auth-firebaseui)
- [ngx-linkifyjs](https://github.com/AnthonyNahas/ngx-linkifyjs)
- [@angular-material-extensions/password-strength](https://github.com/angular-material-extensions/password-strength)
- [@angular-material-extensions/google-maps-autocomplete](https://github.com/angular-material-extensions/google-maps-autocomplete)
- [@angular-material-extensions/link-preview](https://github.com/angular-material-extensions/link-preview)
- [@angular-material-extensions/select-country](https://github.com/angular-material-extensions/select-country)
- [@angular-material-extensions/pages](https://github.com/angular-material-extensions/pages)
- [@angular-material-extensions/select-country](https://github.com/angular-material-extensions/select-country)
- [@angular-material-extensions/contacts](https://github.com/angular-material-extensions/contacts)

---

<a name="support"/>

## Support
+ Drop an email to: [Anthony Nahas](mailto:anthony.na@hotmail.de)
+ or open an appropriate [issue](https://github.com/angular-material-extensions/fab-menu/issues)
+ let us chat on [Gitter](https://gitter.im/angular-material-extensions/Lobby)
 
 Built by and for developers :heart: we will help you :punch:

---

![jetbrains logo](https://raw.githubusercontent.com/angular-material-extensions/fab-menu/HEAD/assets/jetbrains-variant-4_logos/jetbrains-variant-4.png)

This project is supported by [jetbrains](https://www.jetbrains.com/) with 1 ALL PRODUCTS PACK OS LICENSE incl. [webstorm](https://www.jetbrains.com/webstorm)

---

<a name="license"/>

## License

Copyright (c) 2019 [Anthony Nahas](https://github.com/AnthonyNahas). Licensed under the MIT License (MIT)

