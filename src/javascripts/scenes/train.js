import ScrollMagic from 'scrollmagic';
import { Linear, TweenMax, TimelineLite } from 'gsap';

import animKoef from './stations/animKoef';

const makeTrainStartScene = () => {
  const trainStartTween = new TimelineLite()
    .add([
      TweenMax.fromTo('#train', 1000, {
        display: 'none',
        x: '-80%',
        delay: 750,
      }, {
        display: 'block',
        x: '50%',
        delay: 750,
        ease: Linear.easeNone,
      }),
    ]);

  return new ScrollMagic.Scene({
    triggerElement: '#train-start-trigger',
    duration: '100%',
  })
    .setTween(trainStartTween);
};

const makeTrainStationScene = (stationNumber) => {
  const trainStationTimeline = new TimelineLite()
    // train stop on station
    .add([
      TweenMax.to('#train', 100, {
        x: '-50%',
        delay: 400,
      }),
    ])

    // train leave a station
    .add([
      TweenMax.to('#train', 100, {
        x: '50%',
        delay: 500,
      }),
    ]);

  return new ScrollMagic.Scene({
    triggerElement: `#station-${stationNumber}-trigger`, // trigger-id
    duration: 3000,
  })
    .setClassToggle(`#menu-station-${stationNumber}`, 'menu-item-active') // menu-id
    .setTween(trainStationTimeline);
};

const makeTrainStation10Scene = () => {
  const trainStationTimeline = new TimelineLite()
    // fix menu-item-active
    .add([
      TweenMax.set('#menu-station-10', {
        className: '+=menu-item-active',
        delay: 5000 * animKoef,
      }),
    ])

    // train stop on station
    .add([
      TweenMax.to('#train', 1000 * animKoef, {
        x: '50%',
        delay: 5000 * animKoef,
      }),
    ]);

  return new ScrollMagic.Scene({
    triggerElement: '#station-10-trigger', // trigger-id
    duration: '220%',
  })
    // .setClassToggle('#menu-station-10', 'menu-item-active') // menu-id
    .setTween(trainStationTimeline);
};

export default (container) => ([
  makeTrainStartScene().addTo(container),
  makeTrainStationScene(1).addTo(container),
  makeTrainStationScene(2).addTo(container),
  makeTrainStationScene(3).addTo(container),
  makeTrainStationScene(4).addTo(container),
  makeTrainStationScene(5).addTo(container),
  makeTrainStationScene(6).addTo(container),
  makeTrainStationScene(7).addTo(container),
  makeTrainStationScene(8).addTo(container),
  makeTrainStationScene(9).addTo(container),
  makeTrainStation10Scene().addTo(container),
]);
