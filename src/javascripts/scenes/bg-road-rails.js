import ScrollMagic from 'scrollmagic';
import { Linear, TimelineLite, TweenLite } from 'gsap';

const makeBackgroundsRailScene = (triggerNumber) => {
  const backgroundTimeline = new TimelineLite()
    .duration(1)
    .add([
      // selector of the el, duration, { parametrs }

      // rails
      TweenLite.fromTo('#background-rail', 1, {
        backgroundPosition: '0 0',
      }, {
        backgroundPosition: '-100% 0',
        ease: Linear.easeIn,
      }),
    ]);

  return new ScrollMagic.Scene({
    triggerElement: `#road-trigger-${triggerNumber}`,
    duration: '330%', // можно контролировать время с высотой триггера
  })
    .setTween(backgroundTimeline); // add animation to scroll
};

export default (container) => {
  makeBackgroundsRailScene(1).addTo(container); // #road-trigger-1
  makeBackgroundsRailScene(2).addTo(container); // #road-trigger-2
  makeBackgroundsRailScene(3).addTo(container); // #road-trigger-3
};