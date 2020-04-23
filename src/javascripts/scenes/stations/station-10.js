import ScrollMagic from 'scrollmagic';
import { Linear, TimelineLite, TweenMax } from 'gsap';

import animKoef from './animKoef';

const addKoef = 12000;

const makeStation10Scene = () => {
  const stationSceneTimeline = new TimelineLite()
    .add([
      // show station
      TweenMax.fromTo('#station-10', 30000 * animKoef, { // show station duration
        // styles before
        x: '200vw',
        display: 'none',
      }, {
        // styles afrer
        x: 0,
        display: 'block',
        ease: Linear.easeNone,
      }),

      // show cards
      TweenMax.to('#station-10-scene', 1, {
        css: { display: 'block' },
        ease: Linear.easeNone,
        delay: (7000 + addKoef) * animKoef,
      }),

      // 1-2 card show
      TweenMax.fromTo('.station-10-scene-photo-1', 2000 * animKoef,
        {
          x: '-50vw',
          y: '-120vh',
          ease: Linear.easeNone,
          rotation: -320,
        },
        {
          x: 0,
          y: 0,
          ease: Linear.easeNone,
          delay: (7000 + addKoef) * animKoef,
          rotation: 0,
        }),
      TweenMax.fromTo('.station-10-scene-photo-2', 2000 * animKoef,
        {
          x: '50vw',
          y: '120vh',
          ease: Linear.easeNone,
          rotation: -320,
        },
        {
          x: 0,
          y: 0,
          rotation: -13,
          ease: Linear.easeNone,
          delay: (7000 + addKoef) * animKoef,
        }),
      // 1-2 card hide
      TweenMax.to('.station-10-scene-photo-1', 2000 * animKoef, {
        x: '-150vw',
        display: 'none',
        ease: Linear.easeNone,
        delay: (11000 + addKoef) * animKoef,
      }),
      TweenMax.to('.station-10-scene-photo-2', 2000 * animKoef, {
        x: '-150vw',
        display: 'none',
        ease: Linear.easeNone,
        delay: (11000 + addKoef) * animKoef,
      }),

      // 3-4 card show
      TweenMax.fromTo('.station-10-scene-photo-3', 2000 * animKoef,
        {
          x: '100vw',
          y: '-120vh',
          ease: Linear.easeNone,
          rotation: -320,
        },
        {
          x: 0,
          y: 0,
          ease: Linear.easeNone,
          delay: (9500 + addKoef) * animKoef,
          rotation: 10,
        }),
      TweenMax.fromTo('.station-10-scene-photo-4', 2000 * animKoef,
        {
          x: '100vw',
          y: '120vh',
          ease: Linear.easeNone,
          rotation: -320,
        },
        {
          x: 0,
          y: 0,
          ease: Linear.easeNone,
          delay: (9500 + addKoef) * animKoef,
          rotation: 0,
        }),

      // 3-4 card hide
      TweenMax.to('.station-10-scene-photo-3', 2000 * animKoef, {
        x: '-150vw',
        display: 'none',
        ease: Linear.easeNone,
        delay: (13500 + addKoef) * animKoef,
      }),
      TweenMax.to('.station-10-scene-photo-4', 2000 * animKoef, {
        x: '-150vw',
        display: 'none',
        ease: Linear.easeNone,
        delay: (13500 + addKoef) * animKoef,
      }),

      // 5-6 card show
      TweenMax.fromTo('.station-10-scene-photo-5', 2000 * animKoef,
        {
          x: '200vw',
          y: '-120vh',
          ease: Linear.easeNone,
          rotation: -320,
        },
        {
          x: 0,
          y: 0,
          ease: Linear.easeNone,
          delay: (12000 + addKoef) * animKoef,
          rotation: 0,
        }),
      TweenMax.fromTo('.station-10-scene-photo-6', 2000 * animKoef,
        {
          x: '-100vw',
          y: '200vh',
          ease: Linear.easeNone,
          rotation: -320,
        },
        {
          x: 0,
          y: 0,
          ease: Linear.easeNone,
          delay: (12000 + addKoef) * animKoef,
          rotation: -4,
        }),

      // 5-6 card hide
      TweenMax.to('.station-10-scene-photo-5', 2000 * animKoef, {
        x: '-150vw',
        display: 'none',
        ease: Linear.easeNone,
        delay: (16000 + addKoef) * animKoef,
      }),
      TweenMax.to('.station-10-scene-photo-6', 2000 * animKoef, {
        x: '-150vw',
        display: 'none',
        ease: Linear.easeNone,
        delay: (16000 + addKoef) * animKoef,
      }),

      // 7-8 card show
      TweenMax.fromTo('.station-10-scene-photo-7', 2000 * animKoef,
        {
          y: '-200vh',
          ease: Linear.easeNone,
          rotation: -320,
        },
        {
          y: 0,
          ease: Linear.easeNone,
          delay: (14500 + addKoef) * animKoef,
          rotation: 2,
        }),

      // 7 card hide
      TweenMax.to('.station-10-scene-photo-7', 2000 * animKoef, {
        x: '-150vw',
        display: 'none',
        ease: Linear.easeNone,
        delay: (18500 + addKoef) * animKoef,
      }),
    ]);

  return new ScrollMagic.Scene({
    triggerElement: '#station-10-trigger',
    duration: '310%',
    offset: 100,
  })
    .setTween(stationSceneTimeline);
};

export default (container) => ([
  makeStation10Scene().addTo(container),
]);
