import ScrollMagic from 'scrollmagic';
import { Linear, TimelineLite, TweenMax } from 'gsap';
import * as params from './params';

const makeStation10Scene = () => {
  const stationSceneTimeline = new TimelineLite()
    .add([
      // show station
      TweenMax.fromTo('#station-10', params.duration * 0.5, { // show station duration
        // styles before
        x: document.getElementById('station-10').offsetWidth,
        display: 'block',
      }, {
        // styles after
        x: -((document.getElementById('station-10').offsetWidth * 0.5) - (window.innerWidth * 0.5)),
        display: 'block',
        ease: Linear.easeNone,
      }),

      // show cards
      TweenMax.to('#station-10-scene', 1, {
        css: { display: 'block' },
        ease: Linear.easeNone,
      }),

      // 9-8 card show
      TweenMax.fromTo('.station-10-scene-photo-1', params.cardshowSpeed,
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
          delay: 0 * params.interval + params.start,
          rotation: 0,
        }),
      TweenMax.fromTo('.station-10-scene-photo-2', params.cardshowSpeed,
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
          delay: 0 * params.interval + params.start,
        }),
      // 9-8 card hide
      TweenMax.to('.station-10-scene-photo-1', params.cardhideSpeed, {
        x: '-150vw',
        display: 'none',
        ease: Linear.easeNone,
        delay: 0 * params.interval + params.start + params.show,
      }),
      TweenMax.to('.station-10-scene-photo-2', params.cardhideSpeed, {
        x: '-150vw',
        display: 'none',
        ease: Linear.easeNone,
        delay: 0 * params.interval + params.start + params.show,
      }),

      // 4-6 card show
      TweenMax.fromTo('.station-10-scene-photo-3', params.cardshowSpeed,
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
          delay: 1 * params.interval + params.start,
          rotation: -5,
        }),
      TweenMax.fromTo('.station-10-scene-photo-4', params.cardshowSpeed,
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
          delay: 1 * params.interval + params.start,
          rotation: 0,
        }),

      // 4-6 card hide
      TweenMax.to('.station-10-scene-photo-3', params.cardhideSpeed, {
        x: '-150vw',
        display: 'none',
        ease: Linear.easeNone,
        delay: 1 * params.interval + params.start + params.show,
      }),
      TweenMax.to('.station-10-scene-photo-4', params.cardhideSpeed, {
        x: '-150vw',
        display: 'none',
        ease: Linear.easeNone,
        delay: 1 * params.interval + params.start + params.show,
      }),

      // 1-2 card show
      TweenMax.fromTo('.station-10-scene-photo-5', params.cardshowSpeed,
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
          delay: 2 * params.interval + params.start,
          rotation: 0,
        }),
      TweenMax.fromTo('.station-10-scene-photo-6', params.cardshowSpeed,
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
          delay: 2 * params.interval + params.start,
          rotation: 5,
        }),
      TweenMax.fromTo('.station-10-scene-photo-7', params.cardshowSpeed,
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
          delay: 3 * params.interval + params.start,
          rotation: 5,
        }),

      // 1-2 card hide
      TweenMax.to('.station-10-scene-photo-5', params.cardhideSpeed, {
        x: '-150vw',
        display: 'none',
        ease: Linear.easeNone,
        delay: 2 * params.interval + params.start + params.show,
      }),
      TweenMax.to('.station-10-scene-photo-6', params.cardhideSpeed, {
        x: '-150vw',
        display: 'none',
        ease: Linear.easeNone,
        delay: 2 * params.interval + params.start + params.show,
      }),

      TweenMax.to('.station-10-scene-photo-7', params.cardhideSpeed, {
        x: '-150vw',
        display: 'none',
        ease: Linear.easeNone,
        delay: 3 * params.interval + params.start + params.show,
      }),
    ])
    // hide station and scene
    .add([
      TweenMax.to('#station-10-scene', 1, {
        x: '-150%',
        display: 'none',
        ease: Linear.easeNone,
      }),
    ]);

  return new ScrollMagic.Scene({
    triggerElement: '#station-10-trigger',
    duration: params.duration * 0.5,
  })
    .setTween(stationSceneTimeline);
};

export default (container) => ([
  makeStation10Scene().addTo(container),
]);
