import ScrollMagic from 'scrollmagic';
import { Linear, TimelineLite, TweenLite } from 'gsap';

import animKoef from './animKoef';

const makeStation1Scene = () => {
  const stationSceneTimeline = new TimelineLite()
    .add([
      // show station
      TweenLite.fromTo('#station-1', 30000 * animKoef, { // show station duration
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
      TweenLite.to('#station-1-scene', 1, {
        css: { display: 'block' },
        ease: Linear.easeNone,
        delay: 7000,
      }),

      // 9-8 card show
      TweenLite.fromTo('.station-1-scene-photo-9', 2000,
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
          delay: 7000,
          rotation: 0,
        }),
      TweenLite.fromTo('.station-1-scene-photo-8', 2000,
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
          delay: 7000,
        }),
      // 9-8 card hide
      TweenLite.to('.station-1-scene-photo-9', 2000, {
        x: '-150vw',
        display: 'none',
        ease: Linear.easeNone,
        delay: 11000,
      }),
      TweenLite.to('.station-1-scene-photo-8', 2000, {
        x: '-150vw',
        display: 'none',
        ease: Linear.easeNone,
        delay: 11000,
      }),

      // 4-6 card show
      TweenLite.fromTo('.station-1-scene-photo-4', 2000,
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
          delay: 9500,
          rotation: -5,
        }),
      TweenLite.fromTo('.station-1-scene-photo-6', 2000,
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
          delay: 9500,
          rotation: 0,
        }),

      // 4-6 card hide
      TweenLite.to('.station-1-scene-photo-4', 2000, {
        x: '-150vw',
        display: 'none',
        ease: Linear.easeNone,
        delay: 13500,
      }),
      TweenLite.to('.station-1-scene-photo-6', 2000, {
        x: '-150vw',
        display: 'none',
        ease: Linear.easeNone,
        delay: 13500,
      }),

      // 1-2 card show
      TweenLite.fromTo('.station-1-scene-photo-1', 2000,
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
          delay: 12000,
          rotation: 0,
        }),
      TweenLite.fromTo('.station-1-scene-photo-2', 2000,
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
          delay: 12000,
          rotation: 5,
        }),

      // 1-2 card hide
      TweenLite.to('.station-1-scene-photo-1', 2000, {
        x: '-150vw',
        display: 'none',
        ease: Linear.easeNone,
        delay: 16000,
      }),
      TweenLite.to('.station-1-scene-photo-2', 2000, {
        x: '-150vw',
        display: 'none',
        ease: Linear.easeNone,
        delay: 16000,
      }),

      // 5-3 card show
      TweenLite.fromTo('.station-1-scene-photo-5', 2000,
        {
          y: '200vh',
          ease: Linear.easeNone,
          rotation: -320,
        },
        {
          y: 0,
          ease: Linear.easeNone,
          delay: 14500,
          rotation: 0,
        }),
      TweenLite.fromTo('.station-1-scene-photo-3', 2000,
        {
          y: '-200vh',
          ease: Linear.easeNone,
          rotation: -320,
        },
        {
          y: 0,
          ease: Linear.easeNone,
          delay: 14500,
          rotation: 8,
        }),

      // 5-3 card hide
      TweenLite.to('.station-1-scene-photo-5', 2000, {
        x: '-150vw',
        display: 'none',
        ease: Linear.easeNone,
        delay: 18500,
      }),
      TweenLite.to('.station-1-scene-photo-3', 2000, {
        x: '-150vw',
        display: 'none',
        ease: Linear.easeNone,
        delay: 18500,
      }),

      // 7 card show
      TweenLite.fromTo('.station-1-scene-photo-7', 2000,
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
          delay: 17000,
          rotation: -7,
        }),

      // 7 card hide
      TweenLite.to('.station-1-scene-photo-7', 2000, {
        x: '-150vw',
        display: 'none',
        ease: Linear.easeNone,
        delay: 21000,
      }),
    ])


    // hide station and scene
    .add([
      TweenLite.to('#station-1-scene', 1000, {
        x: '-300vw',
        display: 'none',
        ease: Linear.easeNone,
      }),

      // hide station
      TweenLite.to('#station-1', 8000, {
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

export default (container) => {
  makeStation1Scene()
    .addTo(container);
};
