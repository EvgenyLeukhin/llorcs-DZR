import ScrollMagic from 'scrollmagic';
import { Linear, TimelineLite, TweenLite } from 'gsap';

import animKoef from './animKoef';

const makeStation6Scene = () => {
  const stationSceneTimeline = new TimelineLite()
    .add([
      // show station
      TweenLite.fromTo('#station-6', 30000 * animKoef, { // show station duration
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
      TweenLite.to('#station-6-scene', 1, {
        css: { display: 'block' },
        ease: Linear.easeNone,
        delay: 7000,
      }),

      // 1-2 card show
      TweenLite.fromTo('.station-6-scene-photo-1', 2000,
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
      TweenLite.fromTo('.station-6-scene-photo-2', 2000,
        {
          x: '50vw',
          y: '120vh',
          ease: Linear.easeNone,
          rotation: -320,
        },
        {
          x: 0,
          y: 0,
          rotation: -5,
          ease: Linear.easeNone,
          delay: 7000,
        }),
      // 1-2 card hide
      TweenLite.to('.station-6-scene-photo-1', 2000, {
        x: '-150vw',
        display: 'none',
        ease: Linear.easeNone,
        delay: 11000,
      }),
      TweenLite.to('.station-6-scene-photo-2', 2000, {
        x: '-150vw',
        display: 'none',
        ease: Linear.easeNone,
        delay: 11000,
      }),

      // 3-4 card show
      TweenLite.fromTo('.station-6-scene-photo-3', 2000,
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
          rotation: 9,
        }),
      TweenLite.fromTo('.station-6-scene-photo-4', 2000,
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

      // 3-4 card hide
      TweenLite.to('.station-6-scene-photo-3', 2000, {
        x: '-150vw',
        display: 'none',
        ease: Linear.easeNone,
        delay: 13500,
      }),
      TweenLite.to('.station-6-scene-photo-4', 2000, {
        x: '-150vw',
        display: 'none',
        ease: Linear.easeNone,
        delay: 13500,
      }),

      // 5-6 card show
      TweenLite.fromTo('.station-6-scene-photo-5', 2000,
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
      TweenLite.fromTo('.station-6-scene-photo-6', 2000,
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
          rotation: -7,
        }),

      // 5-6 card hide
      TweenLite.to('.station-6-scene-photo-5', 2000, {
        x: '-150vw',
        display: 'none',
        ease: Linear.easeNone,
        delay: 16000,
      }),
      TweenLite.to('.station-6-scene-photo-6', 2000, {
        x: '-150vw',
        display: 'none',
        ease: Linear.easeNone,
        delay: 16000,
      }),

      // 7-8 card show
      TweenLite.fromTo('.station-6-scene-photo-7', 2000,
        {
          y: '-200vh',
          ease: Linear.easeNone,
          rotation: -320,
        },
        {
          y: 0,
          ease: Linear.easeNone,
          delay: 14500,
          rotation: 5,
        }),
      TweenLite.fromTo('.station-6-scene-photo-8', 2000,
        {
          y: '200vh',
          ease: Linear.easeNone,
        },
        {
          y: 0,
          ease: Linear.easeNone,
          delay: 14500,
        }),

      // 7-8 card hide
      TweenLite.to('.station-6-scene-photo-7', 2000, {
        x: '-150vw',
        display: 'none',
        ease: Linear.easeNone,
        delay: 18500,
      }),
      TweenLite.to('.station-6-scene-photo-8', 2000, {
        x: '-150vw',
        display: 'none',
        ease: Linear.easeNone,
        delay: 18500,
      }),

      // 9-10 card show
      TweenLite.fromTo('.station-6-scene-photo-9', 2000,
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
          delay: 17000,
          rotation: 0,
        }),
      TweenLite.fromTo('.station-6-scene-photo-10', 2000,
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

      // 9-10 card hide
      TweenLite.to('.station-6-scene-photo-9', 2000, {
        x: '-150vw',
        display: 'none',
        ease: Linear.easeNone,
        delay: 21000,
      }),
      TweenLite.to('.station-6-scene-photo-10', 2000, {
        x: '-150vw',
        display: 'none',
        ease: Linear.easeNone,
        delay: 21000,
      }),
    ])


    // hide station and scene
    .add([
      TweenLite.to('#station-6-scene', 1000, {
        x: '-300vw',
        display: 'none',
        ease: Linear.easeNone,
      }),

      // hide station
      TweenLite.to('#station-6', 8000, {
        x: '-750vw',
        display: 'none',
        ease: Linear.easeNone,
      }),
    ]);

  return new ScrollMagic.Scene({
    triggerElement: '#station-6-trigger',
    duration: '800%',
    offset: 100,
  })
    .setTween(stationSceneTimeline);
};

export default (container) => {
  makeStation6Scene()
    .addTo(container);
};
