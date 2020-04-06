import ScrollMagic from 'scrollmagic';
import { Linear, TimelineLite, TweenLite } from 'gsap';

const makeBackgroundScene = (triggerNumber) => {
  const backgroundTimeline = new TimelineLite()
    .duration(1)
    .add([
      TweenLite.fromTo('#background-layout-sky', 1, {
        backgroundPosition: '0 0',
      }, {
        backgroundPosition: '-100% 0',
        ease: Linear.easeNone,
      }),
      TweenLite.fromTo('#background-layout-grass', 1, {
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
    .setTween(backgroundTimeline);
};

export default (container) => {
  makeBackgroundScene(1).addTo(container);
  makeBackgroundScene(2).addTo(container);
  makeBackgroundScene(3).addTo(container);
};
