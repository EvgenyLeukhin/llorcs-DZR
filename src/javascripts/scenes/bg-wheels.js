import ScrollMagic from 'scrollmagic';
import { Linear, TweenMax } from 'gsap';

const images = [
  'images/bg/train/wheels-1.png',
  'images/bg/train/wheels-2.png',
  'images/bg/train/wheels-3.png',
  'images/bg/train/wheels-4.png',
  'images/bg/train/wheels-5.png',
  'images/bg/train/wheels-6.png',
  'images/bg/train/wheels-7.png',
  'images/bg/train/wheels-8.png',
];

const obj = { curImg: 0 };

const makeWheelsRoadScene = (roadNumber) => {
  const wheelsTween = TweenMax.to(obj, 0.5,
    {
      curImg: images.length - 1,
      roundProps: 'curImg',
      repeat: 3,
      immediateRender: true,
      ease: Linear.easeNone,
      onUpdate: () => {
        document.getElementById('wheels').setAttribute('src', images[obj.curImg]); // set the image source
      },
    });

  return new ScrollMagic.Scene({
    triggerElement: `#road-trigger-${roadNumber}`,
    duration: '350%',
  })
    .setTween(wheelsTween);
};


const makeWheelsStationsScene = (stationNumber) => {
  const wheelsTween = TweenMax.to(obj, 0.5,
    {
      curImg: images.length - 1,
      roundProps: 'curImg',
      repeat: 3,
      immediateRender: true,
      ease: Linear.easeNone,
      onUpdate: () => {
        document.getElementById('wheels').setAttribute('src', images[obj.curImg]); // set the image source
      },
    });

  return new ScrollMagic.Scene({
    triggerElement: `#station-${stationNumber}-trigger`,
    duration: '350%',
  })
    .setTween(wheelsTween);
};


const makeWheelsStartScene = () => {
  const wheelsTween = TweenMax.to(obj, 0.5,
    {
      curImg: images.length - 1,
      roundProps: 'curImg',
      repeat: 3,
      immediateRender: true,
      ease: Linear.easeNone,
      onUpdate: () => {
        document.getElementById('wheels').setAttribute('src', images[obj.curImg]); // set the image source
      },
    });

  return new ScrollMagic.Scene({
    triggerElement: '#start-scene-trigger',
    duration: '350%',
  })
    .setTween(wheelsTween);
};

const makeWheelsEndScene = () => {
  const wheelsTween = TweenMax.to(obj, 0.5,
    {
      curImg: images.length - 1,
      roundProps: 'curImg',
      repeat: 3,
      immediateRender: true,
      ease: Linear.easeNone,
      onUpdate: () => {
        document.getElementById('wheels').setAttribute('src', images[obj.curImg]); // set the image source
      },
    });

  return new ScrollMagic.Scene({
    triggerElement: '#end-scene-trigger',
    duration: '350%',
  })
    .setTween(wheelsTween);
};

export default (container) => {
  makeWheelsStartScene().addTo(container);
  makeWheelsEndScene().addTo(container);
  makeWheelsStationsScene(1).addTo(container);
  makeWheelsRoadScene(1).addTo(container);
  makeWheelsStationsScene(2).addTo(container);
  makeWheelsRoadScene(2).addTo(container);
  makeWheelsStationsScene(3).addTo(container);
  makeWheelsRoadScene(3).addTo(container);
  makeWheelsStationsScene(4).addTo(container);
  makeWheelsRoadScene(4).addTo(container);
  makeWheelsStationsScene(5).addTo(container);
  makeWheelsRoadScene(5).addTo(container);
  makeWheelsStationsScene(6).addTo(container);
  makeWheelsRoadScene(6).addTo(container);
  makeWheelsStationsScene(7).addTo(container);
  makeWheelsRoadScene(7).addTo(container);
  makeWheelsStationsScene(8).addTo(container);
  makeWheelsRoadScene(8).addTo(container);
  makeWheelsStationsScene(9).addTo(container);
  makeWheelsRoadScene(9).addTo(container);
  makeWheelsStationsScene(10).addTo(container);
  makeWheelsRoadScene(10).addTo(container);
};
