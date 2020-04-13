import ScrollMagic from 'scrollmagic';
import { Linear, TimelineLite, TweenLite } from 'gsap';

const makeStationOneScene = () => {
  const stationSceneTimeline = new TimelineLite()
    .add([
      // show station
      TweenLite.fromTo('#station-2', 3000, {
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
      TweenLite.fromTo('#station-2-scene', 3000, {
        display: 'none',
        x: '200%',
      }, {
        x: '0%',
        display: 'block',
        delay: 3500,
        zIndex: 100,
        ease: Linear.easeNone,
      }),
    ])

    // hide station scene
    .add([
      TweenLite.to('#station-2-scene', 3000, {
        display: 'block',
        x: '-200%',
        zIndex: 1,
        delay: 500,
        ease: Linear.easeNone,
      }),
      // hide station
      TweenLite.to('#station-2', 3000, {
        x: '-200%',
        zIndex: 1,
        display: 'none',
        delay: 2000,
        ease: Linear.easeNone,
      }),
    ]);

  return new ScrollMagic.Scene({
    triggerElement: '#station-2-trigger',
    duration: '400%',
    offset: -300,
  })
    .setTween(stationSceneTimeline);
};

export default (container) => {
  makeStationOneScene()
    .addTo(container);
};
