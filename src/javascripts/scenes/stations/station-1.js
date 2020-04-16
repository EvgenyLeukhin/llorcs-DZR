import ScrollMagic from 'scrollmagic';
import { Linear, TimelineLite, TweenLite } from 'gsap';

const makeStation1Scene = () => {
  const stationSceneTimeline = new TimelineLite()
    .add([
      // show station
      TweenLite.fromTo('#station-1', 3000, { // show station duration
        // styles before
        x: '200%',
        display: 'none',
      }, {
        // styles afrer
        x: '0%',
        display: 'block',
        ease: Linear.easeNone,
      }),

      TweenLite.to('#station-1-scene', 1, {
        css: { display: 'block' },
        ease: Linear.easeNone,
      }),

      // show station scene
      TweenLite.fromTo('.station-1-scene-photo-1', 6000,
        { y: '-50vh', ease: Linear.easeNone },
        { y: 0, ease: Linear.easeNone, delay: 1000 }),

      TweenLite.fromTo('.station-1-scene-photo-2', 6000,
        { y: 2000, ease: Linear.easeNone },
        { y: 0, rotation: 5, ease: Linear.easeNone }),

      TweenLite.fromTo('.station-1-scene-photo-3', 6000,
        { y: -2000, ease: Linear.easeNone },
        { y: 0, rotation: 8, ease: Linear.easeNone }),

      TweenLite.fromTo('.station-1-scene-photo-4', 6000,
        { y: -1000, ease: Linear.easeNone },
        { y: 0, rotation: -5, ease: Linear.easeNone }),

      TweenLite.fromTo('.station-1-scene-photo-5', 6000,
        { y: 1000, ease: Linear.easeNone },
        { y: 0, ease: Linear.easeNone }),

      TweenLite.fromTo('.station-1-scene-photo-6', 6000,
        { y: 2000, ease: Linear.easeNone },
        { y: 0, ease: Linear.easeNone }),

      TweenLite.fromTo('.station-1-scene-photo-7', 6000,
        { y: -2000, ease: Linear.easeNone },
        { y: 0, rotation: -7, ease: Linear.easeNone }),

      TweenLite.fromTo('.station-1-scene-photo-8', 6000,
        { y: 2000, ease: Linear.easeNone },
        { y: 0, rotation: -3, ease: Linear.easeNone }),

      TweenLite.fromTo('.station-1-scene-photo-9', 6000,
        { y: -1000, ease: Linear.easeNone },
        { y: 0, ease: Linear.easeNone }),

      TweenLite.to('#station-1-scene', 6000, {
        ease: Linear.easeNone,
      }),
    ])

    // hide station scene
    .add([
      TweenLite.to('#station-1-scene', 1500, {
        x: '-300%',
        display: 'none',
        ease: Linear.easeNone,
      }),

      // hide station
      TweenLite.to('#station-1', 3000, {
        x: '-200%',
        display: 'none',
        ease: Linear.easeNone,
      }),
    ]);

  return new ScrollMagic.Scene({
    triggerElement: '#station-1-trigger',
    duration: '400%',
    offset: -300,
  })
    .setTween(stationSceneTimeline);
};

export default (container) => {
  makeStation1Scene()
    .addTo(container);
};
