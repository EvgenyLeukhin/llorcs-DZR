import ScrollMagic from 'scrollmagic';
import { Linear, TimelineLite, TweenLite } from 'gsap';

const makeStation3Scene = () => {
  const stationSceneTimeline = new TimelineLite()
    .add([
      // show station
      TweenLite.fromTo('#station-4', 30000, { // show station duration
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
      TweenLite.to('#station-4-scene', 1, {
        css: { display: 'block' },
        ease: Linear.easeNone,
        delay: 7000,
      }),

      // 1-4 card show
      TweenLite.fromTo('.station-4-scene-photo-1', 2000,
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
      TweenLite.fromTo('.station-4-scene-photo-4', 2000,
        {
          x: '50vw',
          y: '120vh',
          ease: Linear.easeNone,
          rotation: -320,
        },
        {
          x: 0,
          y: 0,
          rotation: -11,
          ease: Linear.easeNone,
          delay: 7000,
        }),
      // 1-4 card hide
      TweenLite.to('.station-4-scene-photo-1', 2000, {
        x: '-150vw',
        display: 'none',
        ease: Linear.easeNone,
        delay: 11000,
      }),
      TweenLite.to('.station-4-scene-photo-4', 2000, {
        x: '-150vw',
        display: 'none',
        ease: Linear.easeNone,
        delay: 11000,
      }),

      // 3-5 card show
      TweenLite.fromTo('.station-4-scene-photo-3', 2000,
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
          rotation: 8,
        }),
      TweenLite.fromTo('.station-4-scene-photo-5', 2000,
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

      // 3-5 card hide
      TweenLite.to('.station-4-scene-photo-3', 2000, {
        x: '-150vw',
        display: 'none',
        ease: Linear.easeNone,
        delay: 13500,
      }),
      TweenLite.to('.station-4-scene-photo-5', 2000, {
        x: '-150vw',
        display: 'none',
        ease: Linear.easeNone,
        delay: 13500,
      }),

      // 2-6 card show
      TweenLite.fromTo('.station-4-scene-photo-2', 2000,
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
      TweenLite.fromTo('.station-4-scene-photo-6', 2000,
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
          rotation: -12,
        }),

      // 2-6 card hide
      TweenLite.to('.station-4-scene-photo-2', 2000, {
        x: '-150vw',
        display: 'none',
        ease: Linear.easeNone,
        delay: 16000,
      }),
      TweenLite.to('.station-4-scene-photo-6', 2000, {
        x: '-150vw',
        display: 'none',
        ease: Linear.easeNone,
        delay: 16000,
      }),

      // 7-8 card show
      TweenLite.fromTo('.station-4-scene-photo-7', 2000,
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
      TweenLite.fromTo('.station-4-scene-photo-8', 2000,
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

      // 7-8 card hide
      TweenLite.to('.station-4-scene-photo-7', 2000, {
        x: '-150vw',
        display: 'none',
        ease: Linear.easeNone,
        delay: 18500,
      }),
      TweenLite.to('.station-4-scene-photo-8', 2000, {
        x: '-150vw',
        display: 'none',
        ease: Linear.easeNone,
        delay: 18500,
      }),
    ])


    // hide station and scene
    .add([
      TweenLite.to('#station-4-scene', 1000, {
        x: '-300vw',
        display: 'none',
        ease: Linear.easeNone,
      }),

      // hide station
      TweenLite.to('#station-4', 8000, {
        x: '-750vw',
        display: 'none',
        ease: Linear.easeNone,
      }),
    ]);

  return new ScrollMagic.Scene({
    triggerElement: '#station-4-trigger',
    duration: '400%',
    offset: 100,
  })
    .setTween(stationSceneTimeline);
};

export default (container) => {
  makeStation3Scene()
    .addTo(container);
};
