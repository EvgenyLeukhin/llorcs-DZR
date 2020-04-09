import ScrollMagic from 'scrollmagic';
import { Linear, TimelineLite, TweenLite } from 'gsap';

const makeStartScene = () => {
  const startSceneTimeline = new TimelineLite()
    .add([
      TweenLite.fromTo('#start-scene', 500, {
        css: {
          opacity: 0,
          zIndex: 5,
        },
      }, {
        ease: Linear.easeNone,
        css: {
          opacity: 1,
          zIndex: 10,
        },
      }),
    ])
    .add([
      TweenLite.to('#start-scene', 500, {
        css: {
          opacity: 0,
          zIndex: 5,
        },
        delay: 1000,
        ease: Linear.easeNone,
      }),
    ]);

  return new ScrollMagic.Scene({
    triggerElement: '#start-scene-trigger',
    duration: '100%',
  })
    .setClassToggle('#menu-station-start', 'menu-item-active')
    .setTween(startSceneTimeline);
};

export default (container) => {
  makeStartScene()
    .addTo(container);
};
