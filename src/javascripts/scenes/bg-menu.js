import ScrollMagic from 'scrollmagic';
import { TweenLite } from 'gsap';

const makeMenu1Scene = () => {
  const roadOneTween = TweenLite.fromTo('#menu', 1, { marginLeft: '45vw' }, { marginLeft: '35vw' });
  return new ScrollMagic.Scene({ triggerElement: '#station-1-trigger', duration: '100%' })
    .setTween(roadOneTween);
};

const makeMenu2Scene = () => {
  const roadOneTween = TweenLite.fromTo('#menu', 1, { marginLeft: '35vw' }, { marginLeft: '25vw' });
  return new ScrollMagic.Scene({ triggerElement: '#station-2-trigger', duration: '100%' })
    .setTween(roadOneTween);
};

const makeMenu3Scene = () => {
  const roadOneTween = TweenLite.fromTo('#menu', 1, { marginLeft: '25vw' }, { marginLeft: '15vw' });
  return new ScrollMagic.Scene({ triggerElement: '#station-3-trigger', duration: '100%' })
    .setTween(roadOneTween);
};

const makeMenu4Scene = () => {
  const roadOneTween = TweenLite.fromTo('#menu', 1, { marginLeft: '15vw' }, { marginLeft: '5vw' });
  return new ScrollMagic.Scene({ triggerElement: '#station-4-trigger', duration: '100%' })
    .setTween(roadOneTween);
};

const makeMenu5Scene = () => {
  const roadOneTween = TweenLite.fromTo('#menu', 1, { marginLeft: '5vw' }, { marginLeft: '-5vw' });
  return new ScrollMagic.Scene({ triggerElement: '#station-5-trigger', duration: '100%' })
    .setTween(roadOneTween);
};

const makeMenu6Scene = () => {
  const roadOneTween = TweenLite.fromTo('#menu', 1, { marginLeft: '-5vw' }, { marginLeft: '-15vw' });
  return new ScrollMagic.Scene({ triggerElement: '#station-6-trigger', duration: '100%' })
    .setTween(roadOneTween);
};

const makeMenu7Scene = () => {
  const roadOneTween = TweenLite.fromTo('#menu', 1, { marginLeft: '-15vw' }, { marginLeft: '-25vw' });
  return new ScrollMagic.Scene({ triggerElement: '#station-7-trigger', duration: '100%' })
    .setTween(roadOneTween);
};

const makeMenu8Scene = () => {
  const roadOneTween = TweenLite.fromTo('#menu', 1, { marginLeft: '-25vw' }, { marginLeft: '-35vw' });
  return new ScrollMagic.Scene({ triggerElement: '#station-8-trigger', duration: '100%' })
    .setTween(roadOneTween);
};

const makeMenu9Scene = () => {
  const roadOneTween = TweenLite.fromTo('#menu', 1, { marginLeft: '-35vw' }, { marginLeft: '-45vw' });
  return new ScrollMagic.Scene({ triggerElement: '#station-9-trigger', duration: '100%' })
    .setTween(roadOneTween);
};

const makeMenu10Scene = () => {
  const roadOneTween = TweenLite.fromTo('#menu', 1, { marginLeft: '-45vw' }, { marginLeft: '-55vw' });
  return new ScrollMagic.Scene({ triggerElement: '#station-10-trigger', duration: '100%' })
    .setTween(roadOneTween);
};

export default (container) => {
  makeMenu1Scene().addTo(container);
  makeMenu2Scene().addTo(container);
  makeMenu3Scene().addTo(container);
  makeMenu4Scene().addTo(container);
  makeMenu5Scene().addTo(container);
  makeMenu6Scene().addTo(container);
  makeMenu7Scene().addTo(container);
  makeMenu8Scene().addTo(container);
  makeMenu9Scene().addTo(container);
  makeMenu10Scene().addTo(container);
};
