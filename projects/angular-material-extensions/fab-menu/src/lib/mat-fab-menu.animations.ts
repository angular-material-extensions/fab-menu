import {
  animate,
  keyframes,
  query,
  stagger,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

export const speedDialFabAnimations = [
  trigger('fabToggler', [
    state(
      'false',
      style({
        transform: 'rotate(0deg)'
      })
    ),
    state(
      'true',
      style({
        transform: 'rotate(225deg)'
      })
    ),
    transition('* <=> *', animate('200ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
  ]),
  trigger('fabsStagger', [
    transition('* => *', [
      query(':enter', style({ opacity: 0 }), { optional: true }),

      query(
        ':enter',
        stagger('40ms', [
          animate(
            '200ms cubic-bezier(0.4, 0.0, 0.2, 1)',
            keyframes([
              style({ opacity: 0, transform: 'translateY(10px)' }),
              style({ opacity: 1, transform: 'translateY(0)' })
            ])
          )
        ]),
        { optional: true }
      ),

      query(
        ':leave',
        animate(
          '200ms cubic-bezier(0.4, 0.0, 0.2, 1)',
          keyframes([style({ opacity: 1 }), style({ opacity: 0 })])
        ),
        { optional: true }
      )
    ])
  ])
];
