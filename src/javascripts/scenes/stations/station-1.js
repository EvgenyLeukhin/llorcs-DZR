import ScrollMagic from 'scrollmagic';
import { Linear, TimelineLite, TweenMax } from 'gsap';

import animKoef from './animKoef';

const makeStation1Scene = () => {
  const stationSceneTimeline = new TimelineLite()
    .add([
      // show station
      TweenMax.fromTo('#station-1', 30000 * animKoef, { // show station duration
        // styles before
        x: '200vw',
        display: 'none',
      }, {
        // styles afrer
        x: '-200vw',
        display: 'block',
        ease: Linear.easeNone,
      }),

      // show cards
      TweenMax.to('#station-1-scene', 1, {
        css: { display: 'block' },
        ease: Linear.easeNone,
        delay: 7000 * animKoef,
      }),

      // 9-8 card show
      TweenMax.fromTo('.station-1-scene-photo-9', 4000 * animKoef,
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
          delay: 7000 * animKoef,
          rotation: 0,
        }),
      TweenMax.fromTo('.station-1-scene-photo-8', 4000 * animKoef,
        {
          x: '50vw',
          y: '120vh',
          ease: Linear.easeNone,
          rotation: -320,
        },
        {
          x: 0,
          y: 0,
          rotation: -3,
          ease: Linear.easeNone,
          delay: 7000 * animKoef,
        }),
      // 9-8 card hide
      TweenMax.to('.station-1-scene-photo-9', 2000 * animKoef, {
        x: '-150vw',
        display: 'none',
        ease: Linear.easeNone,
        delay: 13000 * animKoef,
      }),
      TweenMax.to('.station-1-scene-photo-8', 2000 * animKoef, {
        x: '-150vw',
        display: 'none',
        ease: Linear.easeNone,
        delay: 13000 * animKoef,
      }),

      // 4-6 card show
      TweenMax.fromTo('.station-1-scene-photo-4', 4000 * animKoef,
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
          delay: 9500 * animKoef,
          rotation: -5,
        }),
      TweenMax.fromTo('.station-1-scene-photo-6', 4000 * animKoef,
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
          delay: 9500 * animKoef,
          rotation: 0,
        }),

      // 4-6 card hide
      TweenMax.to('.station-1-scene-photo-4', 2000 * animKoef, {
        x: '-150vw',
        display: 'none',
        ease: Linear.easeNone,
        delay: 15500 * animKoef,
      }),
      TweenMax.to('.station-1-scene-photo-6', 2000 * animKoef, {
        x: '-150vw',
        display: 'none',
        ease: Linear.easeNone,
        delay: 15500 * animKoef,
      }),

      // 1-2 card show
      TweenMax.fromTo('.station-1-scene-photo-1', 4000 * animKoef,
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
          delay: 12000 * animKoef,
          rotation: 0,
        }),
      TweenMax.fromTo('.station-1-scene-photo-2', 4000 * animKoef,
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
          delay: 12000 * animKoef,
          rotation: 5,
        }),

      // 1-2 card hide
      TweenMax.to('.station-1-scene-photo-1', 2000 * animKoef, {
        x: '-150vw',
        display: 'none',
        ease: Linear.easeNone,
        delay: 18000 * animKoef,
      }),
      TweenMax.to('.station-1-scene-photo-2', 2000 * animKoef, {
        x: '-150vw',
        display: 'none',
        ease: Linear.easeNone,
        delay: 18000 * animKoef,
      }),

      // 5-3 card show
      TweenMax.fromTo('.station-1-scene-photo-5', 4000 * animKoef,
        {
          y: '200vh',
          ease: Linear.easeNone,
          rotation: -320,
        },
        {
          y: 0,
          ease: Linear.easeNone,
          delay: 14500 * animKoef,
          rotation: 0,
        }),
      TweenMax.fromTo('.station-1-scene-photo-3', 4000 * animKoef,
        {
          y: '-200vh',
          ease: Linear.easeNone,
          rotation: -320,
        },
        {
          y: 0,
          ease: Linear.easeNone,
          delay: 14500 * animKoef,
          rotation: 8,
        }),

      // 5-3 card hide
      TweenMax.to('.station-1-scene-photo-5', 2000 * animKoef, {
        x: '-150vw',
        display: 'none',
        ease: Linear.easeNone,
        delay: 20500 * animKoef,
      }),
      TweenMax.to('.station-1-scene-photo-3', 2000 * animKoef, {
        x: '-150vw',
        display: 'none',
        ease: Linear.easeNone,
        delay: 20500 * animKoef,
      }),

      // 7 card show
      TweenMax.fromTo('.station-1-scene-photo-7', 4000 * animKoef,
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
          delay: 17000 * animKoef,
          rotation: -7,
        }),

      // 7 card hide
      TweenMax.to('.station-1-scene-photo-7', 2000 * animKoef, {
        x: '-150vw',
        display: 'none',
        ease: Linear.easeNone,
        delay: 23000 * animKoef,
      }),
    ])


    // hide station and scene
    .add([
      TweenMax.to('#station-1-scene', 1000, {
        x: '-300vw',
        display: 'none',
        ease: Linear.easeNone,
      }),

      // hide station
      TweenMax.to('#station-1', 8000 * animKoef, {
        x: '-750vw',
        display: 'none',
        ease: Linear.easeNone,
      }),
    ]);

  return new ScrollMagic.Scene({
    triggerElement: '#station-1-trigger',
    duration: '800%',
    offset: 100,
  })
    .setTween(stationSceneTimeline);
};

export default (container) => ([
  makeStation1Scene().addTo(container),
]);
