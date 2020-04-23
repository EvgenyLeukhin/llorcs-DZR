import ScrollMagic from 'scrollmagic';
import { Linear, TimelineLite, TweenMax } from 'gsap';

import animKoef from './animKoef';

const makeStation8Scene = () => {
  const stationSceneTimeline = new TimelineLite()
    .add([
      // show station
      TweenMax.fromTo('#station-8', 30000 * animKoef, { // show station duration
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
      TweenMax.to('#station-8-scene', 1, {
        css: { display: 'block' },
        ease: Linear.easeNone,
        delay: 7000 * animKoef,
      }),

      // 1-2 card show
      TweenMax.fromTo('.station-8-scene-photo-1', 2000 * animKoef,
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
      TweenMax.fromTo('.station-8-scene-photo-2', 2000 * animKoef,
        {
          x: '50vw',
          y: '120vh',
          ease: Linear.easeNone,
          rotation: -320,
        },
        {
          x: 0,
          y: 0,
          rotation: 8,
          ease: Linear.easeNone,
          delay: 7000 * animKoef,
        }),
      // 1-2 card hide
      TweenMax.to('.station-8-scene-photo-1', 2000 * animKoef, {
        x: '-150vw',
        display: 'none',
        ease: Linear.easeNone,
        delay: 11000 * animKoef,
      }),
      TweenMax.to('.station-8-scene-photo-2', 2000 * animKoef, {
        x: '-150vw',
        display: 'none',
        ease: Linear.easeNone,
        delay: 11000 * animKoef,
      }),

      // 3-4 card show
      TweenMax.fromTo('.station-8-scene-photo-3', 2000 * animKoef,
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
          rotation: -6,
        }),
      TweenMax.fromTo('.station-8-scene-photo-4', 2000 * animKoef,
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

      // 3-4 card hide
      TweenMax.to('.station-8-scene-photo-3', 2000 * animKoef, {
        x: '-150vw',
        display: 'none',
        ease: Linear.easeNone,
        delay: 13500 * animKoef,
      }),
      TweenMax.to('.station-8-scene-photo-4', 2000 * animKoef, {
        x: '-150vw',
        display: 'none',
        ease: Linear.easeNone,
        delay: 13500 * animKoef,
      }),

      // 5-6 card show
      TweenMax.fromTo('.station-8-scene-photo-5', 2000 * animKoef,
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
      TweenMax.fromTo('.station-8-scene-photo-6', 2000 * animKoef,
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
          rotation: 23,
        }),

      // 5-6 card hide
      TweenMax.to('.station-8-scene-photo-5', 2000 * animKoef, {
        x: '-150vw',
        display: 'none',
        ease: Linear.easeNone,
        delay: 16000 * animKoef,
      }),
      TweenMax.to('.station-8-scene-photo-6', 2000 * animKoef, {
        x: '-150vw',
        display: 'none',
        ease: Linear.easeNone,
        delay: 16000 * animKoef,
      }),

      // 7-8 card show
      TweenMax.fromTo('.station-8-scene-photo-7', 2000 * animKoef,
        {
          y: '-200vh',
          ease: Linear.easeNone,
          rotation: -320,
        },
        {
          y: 0,
          ease: Linear.easeNone,
          delay: 14500 * animKoef,
          rotation: 11,
        }),
      TweenMax.fromTo('.station-8-scene-photo-8', 2000 * animKoef,
        {
          y: '200vh',
          ease: Linear.easeNone,
        },
        {
          y: 0,
          ease: Linear.easeNone,
          delay: 14500 * animKoef,
        }),

      // 7-8 card hide
      TweenMax.to('.station-8-scene-photo-7', 2000 * animKoef, {
        x: '-150vw',
        display: 'none',
        ease: Linear.easeNone,
        delay: 18500 * animKoef,
      }),
      TweenMax.to('.station-8-scene-photo-8', 2000 * animKoef, {
        x: '-150vw',
        display: 'none',
        ease: Linear.easeNone,
        delay: 18500 * animKoef,
      }),
    ])


    // hide station and scene
    .add([
      TweenMax.to('#station-8-scene', 1000, {
        x: '-300vw',
        display: 'none',
        ease: Linear.easeNone,
      }),

      // hide station
      TweenMax.to('#station-8', 8000 * animKoef, {
        x: '-750vw',
        display: 'none',
        ease: Linear.easeNone,
      }),
    ]);

  return new ScrollMagic.Scene({
    triggerElement: '#station-8-trigger',
    duration: '800%',
    offset: 100,
  })
    .setTween(stationSceneTimeline);
};

export default (container) => ([
  makeStation8Scene().addTo(container),
]);
