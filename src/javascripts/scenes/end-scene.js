import ScrollMagic from 'scrollmagic';
import { Linear, TimelineLite, TweenLite } from 'gsap';

const makeEndScene = () => {
  const endSceneTimeline = new TimelineLite()
    .add([
      TweenLite.fromTo('#end-scene', 500, {
        display: 'none',
        opacity: 0,
        zIndex: 15,
      }, {
        display: 'block',
        opacity: 1,
        ease: Linear.easeNone,
      }),
    ]);

  return new ScrollMagic.Scene({
    triggerElement: '#end-scene-trigger',
    duration: '100%',
  })
    .setClassToggle('#menu-station-end', 'menu-item-active')
    .setTween(endSceneTimeline);
};

export default (container) => {
  makeEndScene()
    .addTo(container);
};
