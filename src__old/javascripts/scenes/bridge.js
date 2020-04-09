import ScrollMagic from 'scrollmagic';
import { Linear, TweenLite } from 'gsap';

const makeBridgeScene = () => {
  const bridgeTween = TweenLite.fromTo('#bridge', 1, {
    x: '150%',
  }, {
    x: '-150%',
    ease: Linear.easeNone,
  });

  return new ScrollMagic.Scene({
    triggerElement: '#road-trigger-2',
    duration: '100%',
  })
    .setTween(bridgeTween);
};

export default (container) => {
  makeBridgeScene()
    .addTo(container);
};
