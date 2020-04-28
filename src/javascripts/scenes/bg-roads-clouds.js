import ScrollMagic from 'scrollmagic';
import { Linear, TweenMax } from 'gsap';

const makeRoadCloudsScene = (roadNumber) => {
  const roadOneTween = TweenMax.fromTo(`#road-${roadNumber}`, 1, {
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
    triggerElement: `#road-trigger-${roadNumber}`,
    duration: 2500,
  })
    .setTween(roadOneTween);
};

export default (container) => ([
  makeRoadCloudsScene(1).addTo(container),
  makeRoadCloudsScene(2).addTo(container),
  makeRoadCloudsScene(3).addTo(container),
  makeRoadCloudsScene(4).addTo(container),
  makeRoadCloudsScene(5).addTo(container),
  makeRoadCloudsScene(6).addTo(container),
  makeRoadCloudsScene(7).addTo(container),
  makeRoadCloudsScene(8).addTo(container),
  makeRoadCloudsScene(9).addTo(container),
  makeRoadCloudsScene(10).addTo(container),
]);
