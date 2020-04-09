import ScrollMagic from 'scrollmagic';
import { Linear, TimelineLite, TweenLite } from 'gsap';

const makeStationOneScene = () => {
  const stationSceneTimeline = new TimelineLite()
    .add([
      TweenLite.fromTo('#station-1', 500, {
        zIndex: 1,
      }, {
        // delay: 2000,
        zIndex: 10,
        ease: Linear.easeNone,
      }),
      TweenLite.fromTo('#station-1', 1000, {
        x: '200%',
      }, {
        x: '0%',
        ease: Linear.easeNone,
      }),
    ])
    .add([
      TweenLite.to('#station-1', 500, {
        delay: 500,
        ease: Linear.easeNone,
      }),
      TweenLite.to('#station-1', 1000, {
        x: '-200%',
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
  // makeStationScene(2)
  //   .addTo(container);
};
