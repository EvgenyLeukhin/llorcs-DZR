import ScrollMagic from 'scrollmagic';
import { Linear, TimelineLite, TweenMax } from 'gsap';
import addIndicators from '../../../../node_modules/scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';

import animKoef from './animKoef';
const duration = 3000;
const start = 1000;
const interval = 250;
const show = 550;
const cardshowSpeed = duration / 8;
const cardhideSpeed = duration / 15;



const makeStation1Scene = () => {
  const stationSceneTimeline = new TimelineLite()
    .add([
      // show station
      TweenMax.fromTo('#station-1', duration, { // show station duration
        // styles before
        x: '100%',
        display: 'block',
      }, {
        // styles afrer
        x: '-100%',
        display: 'block',
        ease: Linear.easeNone,
      }),

      // show cards
      TweenMax.to('#station-1-scene', 1, {
        css: { display: 'block' },
        ease: Linear.easeNone,
      }),

      // 9-8 card show
      TweenMax.fromTo('.station-1-scene-photo-9', cardshowSpeed,
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
          delay: 0 * interval + start,
          rotation: 0,
        }),
      TweenMax.fromTo('.station-1-scene-photo-8', cardshowSpeed,
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
          delay: 0 * interval + start,
        }),
      // 9-8 card hide
      TweenMax.to('.station-1-scene-photo-9', cardhideSpeed, {
        x: '-150vw',
        display: 'none',
        ease: Linear.easeNone,
        delay: 0 * interval + start + show,
      }),
      TweenMax.to('.station-1-scene-photo-8', cardhideSpeed, {
        x: '-150vw',
        display: 'none',
        ease: Linear.easeNone,
        delay: 0 * interval + start + show,
      }),

      // 4-6 card show
      TweenMax.fromTo('.station-1-scene-photo-4', cardshowSpeed,
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
          delay: 1 * interval + start,
          rotation: -5,
        }),
      TweenMax.fromTo('.station-1-scene-photo-6', cardshowSpeed,
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
          delay: 1 * interval + start,
          rotation: 0,
        }),

      // 4-6 card hide
      TweenMax.to('.station-1-scene-photo-4', cardhideSpeed, {
        x: '-150vw',
        display: 'none',
        ease: Linear.easeNone,
        delay: 1 * interval + start + show,
      }),
      TweenMax.to('.station-1-scene-photo-6', cardhideSpeed, {
        x: '-150vw',
        display: 'none',
        ease: Linear.easeNone,
        delay: 1 * interval + start + show,
      }),

      // 1-2 card show
      TweenMax.fromTo('.station-1-scene-photo-1', cardshowSpeed,
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
          delay: 2 * interval + start,
          rotation: 0,
        }),
      TweenMax.fromTo('.station-1-scene-photo-2', cardshowSpeed,
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
          delay: 2 * interval + start,
          rotation: 5,
        }),

      // 1-2 card hide
      TweenMax.to('.station-1-scene-photo-1', cardhideSpeed, {
        x: '-150vw',
        display: 'none',
        ease: Linear.easeNone,
        delay: 2 * interval + start + show,
      }),
      TweenMax.to('.station-1-scene-photo-2', cardhideSpeed, {
        x: '-150vw',
        display: 'none',
        ease: Linear.easeNone,
        delay: 2 * interval + start + show,
      }),

      // 5-3 card show
      TweenMax.fromTo('.station-1-scene-photo-5', cardshowSpeed,
        {
          y: '200vh',
          ease: Linear.easeNone,
          rotation: -320,
        },
        {
          y: 0,
          ease: Linear.easeNone,
          delay: 3 * interval + start,
          rotation: 0,
        }),
      TweenMax.fromTo('.station-1-scene-photo-3', cardshowSpeed,
        {
          y: '-200vh',
          ease: Linear.easeNone,
          rotation: -320,
        },
        {
          y: 0,
          ease: Linear.easeNone,
          delay: 3 * interval + start,
          rotation: 8,
        }),

      // 5-3 card hide
      TweenMax.to('.station-1-scene-photo-5', cardhideSpeed, {
        x: '-150vw',
        display: 'none',
        ease: Linear.easeNone,
        delay: 3 * interval + start + show,
      }),
      TweenMax.to('.station-1-scene-photo-3', cardhideSpeed, {
        x: '-150vw',
        display: 'none',
        ease: Linear.easeNone,
        delay: 3 * interval + start + show,
      }),

      // 7 card show
      TweenMax.fromTo('.station-1-scene-photo-7', cardshowSpeed,
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
          delay: 4 * interval + start,
          rotation: -7,
        }),

      // 7 card hide
      TweenMax.to('.station-1-scene-photo-7', cardhideSpeed, {
        x: '-150vw',
        display: 'none',
        ease: Linear.easeNone,
        delay: 4 * interval + start + show,
      }),
    ])
        // hide station and scene
    .add([
      TweenMax.to('#station-1-scene',  1, {
        x: '-150%',
        display: 'none',
        ease: Linear.easeNone,
      }),
    ]);

  return new ScrollMagic.Scene({
    triggerElement: '#station-1-trigger',
    duration: duration,
  })
    .setTween(stationSceneTimeline);
};

export default (container) => ([
  makeStation1Scene().addIndicators().addTo(container),
]);
