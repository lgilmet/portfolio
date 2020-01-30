import {
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  animate,
  keyframes
} from "@angular/animations";

const optional = { optional: true };

let toTheRight = [
  query(
    ":enter, :leave",
    [
      style({
        position: "absolute",
        top: "0",
        right: 0,
        width: "100%"
      })
    ],
    optional
  ),
  query(":enter", [style({ right: "-100%" })]),
  group([
    query(
      ":leave",
      [animate("300ms ease", style({ right: "100%" }))],
      optional
    ),
    query(":enter", [animate("300ms ease", style({ right: "0%" }))])
  ])
];
let toTheLeft = [
  query(
    ":enter, :leave",
    [
      style({
        position: "absolute",
        top: "0",
        left: 0,
        width: "100%"
      })
    ],
    optional
  ),
  query(":enter", [style({ left: "-100%" })]),
  group([
    query(":leave", [animate("300ms ease", style({ left: "100%" }))], optional),
    query(":enter", [animate("300ms ease", style({ left: "0%" }))])
  ])
];

export const slider = trigger("routeAnimations", [
  transition("* => isLeft", toTheLeft),
  transition("* => isRight", toTheRight),
  transition("isRight => *", toTheLeft),
  transition("isLeft => *", toTheRight)
]);
function slideTo(direction) {
  const optional = { optional: true };

  return [
    query(
      ":enter, :leave",
      [
        style({
          position: "absolute",
          top: 0,
          [direction]: 0,
          width: "100%"
        })
      ],
      optional
    ),
    query(":enter", [style({ [direction]: "-100%" })]),
    group([
      query(
        ":leave",
        [animate("600ms ease", style({ [direction]: "100%" }))],
        optional
      ),
      query(":enter", [animate("600ms ease", style({ [direction]: "0%" }))])
    ])
    // Normalize the page style... Might not be necessary

    // Required only if you have child animations on the page
    // query(':leave', animateChild()),
    // query(':enter', animateChild()),
  ];
}
