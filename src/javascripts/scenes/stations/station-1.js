import ScrollMagic from 'scrollmagic';
import { Linear, TimelineLite, TweenLite } from 'gsap';

const makeStationOneScene = () => {
  const stationSceneTimeline = new TimelineLite()
    .add([
      // show station
      TweenLite.fromTo('#station-1', 1000, {
        // styles before
        x: '200%',
        zIndex: 1,
        display: 'none',
      }, {
        // styles afrer
        x: '0%',
        display: 'block',
        zIndex: 10,
        ease: Linear.easeNone,
      }),

      // show station scene
      TweenLite.fromTo('#station-1-scene', 500, {
        display: 'none',
        opacity: 0,
      }, {
        opacity: 1,
        display: 'block',
        delay: 2000,
        zIndex: 100,
        ease: Linear.easeNone,
      }),
    ])

    // hide station scene
    .add([
      TweenLite.to('#station-1-scene', 500, {
        display: 'none',
        zIndex: 1,
        opacity: 0,
        delay: 500,
        ease: Linear.easeNone,
      }),

      // hide station
      TweenLite.to('#station-1', 1000, {
        x: '-200%',
        zIndex: 1,
        display: 'none',
        delay: 2000,
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
  makeStationOneScene()
    .addTo(container);
};
