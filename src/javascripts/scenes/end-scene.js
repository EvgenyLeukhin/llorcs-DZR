import ScrollMagic from 'scrollmagic';
import { Linear, TimelineLite, TweenLite } from 'gsap';

const makeEndScene = () => {
  const endSceneTimeline = new TimelineLite()
    .add([
      TweenLite.fromTo('#end-scene', 500, {
        opacity: 0,
      }, {
        opacity: 1,
        ease: Linear.easeNone,
      }),
    ])
    .add([
      TweenLite.to('#end-scene', 500, {
        opacity: 0,
        delay: 1000,
        ease: Linear.easeNone,
      }),
    ]);

  return new ScrollMagic.Scene({
    triggerElement: '#end-scene-trigger',
    duration: '100%',
  })
    .setTween(endSceneTimeline);
};

export default (container) => {
  makeEndScene()
    .addTo(container);
};
