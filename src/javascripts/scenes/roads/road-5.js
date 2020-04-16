import ScrollMagic from 'scrollmagic';
import { Linear, TweenLite } from 'gsap';

const makeRoad5Scene = () => {
  const roadTwoTween = TweenLite.fromTo('#road-5', 1, {
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
    triggerElement: '#road-trigger-5',
    duration: '350%',
  })
    .setTween(roadTwoTween);
};

export default (container) => {
  makeRoad5Scene()
    .addTo(container);
};
