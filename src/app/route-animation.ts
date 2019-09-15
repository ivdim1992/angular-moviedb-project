import { transition, trigger, query, style, animate, group, animateChild } from '@angular/animations';
export const slideInAnimation = trigger('routeAnimations', [
  transition('home => *', [
    query(':enter, :leave', style({ background: '#ffffff', position: 'fixed', width: '100%' }), { optional: true }),
    group([
      query(
        ':enter',
        [
          style({ transform: 'translateX(-100%)', background: '#ffffff' }),
          animate('0.5s ease-in-out', style({ transform: 'translateX(0%)', background: '#ffffff' }))
        ],
        { optional: true }
      ),
      query(
        ':leave',
        [
          style({ transform: 'translateX(0%)', background: '#ffffff' }),
          animate('0.5s ease-in-out', style({ transform: 'translateX(100%)', background: '#ffffff' }))
        ],
        { optional: true }
      )
    ])
  ]),
  transition('* => home', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%', background: '#ffffff' }), { optional: true }),
    group([
      query(
        ':enter',
        [style({ transform: 'translateX(100%)' }), animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))],
        { optional: true }
      ),
      query(
        ':leave',
        [
          style({ transform: 'translateX(0%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
        ],
        { optional: true }
      )
    ])
  ])
]);
