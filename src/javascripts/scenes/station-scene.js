import ScrollMagic from 'scrollmagic';
import { Linear, TimelineLite, TweenLite } from 'gsap';

const makeStationScene = (stationNumber) => {
  const stationSceneTimeline = new TimelineLite()
    .add([
      TweenLite.fromTo('#station-scene', 500, {
        opacity: 0,
      }, {
        delay: 2000,
        opacity: 1,
        ease: Linear.easeNone,
      }),
      TweenLite.fromTo('#station', 1000, {
        x: '100%',
      }, {
        x: '0%',
        ease: Linear.easeNone,
      }),
    ])
    .add([
      TweenLite.to('#station-scene', 500, {
        opacity: 0,
        delay: 500,
        ease: Linear.easeNone,
      }),
      TweenLite.to('#station', 1000, {
        x: '-100%',
        delay: 2000,
        ease: Linear.easeNone,
      }),
    ]);

  return new ScrollMagic.Scene({
    triggerElement: `#train-station-${stationNumber}-trigger`,
    duration: '200%',
    offset: -300,
  })
    .setTween(stationSceneTimeline);
};

export default (container) => {
  makeStationScene(1)
    .addTo(container);
  makeStationScene(2)
    .addTo(container);
};
