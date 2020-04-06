import ScrollMagic from 'scrollmagic';
import { Linear, TimelineLite, TweenLite } from 'gsap';

const makeStartScene = () => {
  const startSceneTimeline = new TimelineLite()
    .add([
      TweenLite.fromTo('#start-scene', 500, {
        opacity: 0,
      }, {
        opacity: 1,
        ease: Linear.easeNone,
      }),
    ])
    .add([
      TweenLite.to('#start-scene', 500, {
        opacity: 0,
        delay: 1000,
        ease: Linear.easeNone,
      }),
    ]);

  return new ScrollMagic.Scene({
    triggerElement: '#start-scene-trigger',
    duration: '100%',
  })
    .setTween(startSceneTimeline);
};

export default (container) => {
  makeStartScene()
    .addTo(container);
};
