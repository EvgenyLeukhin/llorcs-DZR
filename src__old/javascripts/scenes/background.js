import ScrollMagic from 'scrollmagic';
import { Linear, TimelineLite, TweenLite } from 'gsap';

const makeBackgroundScene = (triggerNumber) => {
  const backgroundTimeline = new TimelineLite()
    .duration(1)
    .add([
      // selector of the el, duration, { parametrs }
      TweenLite.fromTo('#background-layout-sky', 1, {
        backgroundPosition: '0 96%',
      }, {
        backgroundPosition: '-100% 96%',
        ease: Linear.easeNone,
      }),
      TweenLite.fromTo('#background-layout-tree-1', 1, {
        backgroundPosition: '0 0',
      }, {
        backgroundPosition: '-100% 0',
        ease: Linear.easeNone,
      }),
      TweenLite.fromTo('#background-layout-tree-2', 1, {
        backgroundPosition: '0 0',
      }, {
        backgroundPosition: '-100% 0',
        ease: Linear.easeNone,
      }),
      TweenLite.fromTo('#background-layout-road', 1, {
        backgroundPosition: '0 0',
      }, {
        backgroundPosition: '-100% 0',
        ease: Linear.easeNone,
      }),
    ]);

  return new ScrollMagic.Scene({
    triggerElement: `#road-trigger-${triggerNumber}`,
    duration: '100%',
  })
    .setTween(backgroundTimeline); // add animation to scroll
};

export default (container) => {
  makeBackgroundScene(1).addTo(container);
  makeBackgroundScene(2).addTo(container);
  makeBackgroundScene(3).addTo(container);
};
