import ScrollMagic from 'scrollmagic';
import { Linear, TweenLite } from 'gsap';

const makeRoadOneScene = () => {
  const roadOneTween = TweenLite.fromTo('#road-1', 1, {
    display: 'block',
    x: '150%',
    opacity: 1,
  }, {
    display: 'none',
    x: '-150%',
    opacity: 0,
    ease: Linear.easeNone,
  });

  return new ScrollMagic.Scene({
    triggerElement: '#road-trigger-1',
    duration: '350%',
  })
    .setTween(roadOneTween);
};

export default (container) => {
  makeRoadOneScene()
    .addTo(container);
};
