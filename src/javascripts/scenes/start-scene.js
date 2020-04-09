import ScrollMagic from 'scrollmagic';
import { Linear, TimelineLite, TweenLite } from 'gsap';

const makeStartScene = () => {
  const startSceneTimeline = new TimelineLite()
    // анимация от и до продолжительностью 500
    .add([
      TweenLite.fromTo('#start-scene', 500, {
        css: {
          opacity: 0,
          zIndex: 1,
        },
      }, {
        ease: Linear.easeNone,
        css: {
          opacity: 1,
          zIndex: 15,
        },
      }),
    ])
    // анимация точечная продолжительностью 500, задержкой 1000
    .add([
      TweenLite.to('#start-scene', 500, {
        css: {
          display: 'none',
          opacity: 0,
          zIndex: 15,
        },
        // delay: 1000,
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
