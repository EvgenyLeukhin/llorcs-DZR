import ScrollMagic from 'scrollmagic';
import { Linear, TweenLite, TimelineLite } from 'gsap';

import animKoef from './stations/animKoef';

const makeTrainStartScene = () => {
  const trainStartTween = new TimelineLite()
    .add([
      TweenLite.fromTo('#train', 1000, {
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
      TweenLite.to('#train', 1000 * animKoef, {
        x: '-50%',
        delay: 4000 * animKoef,
      }),
    ])

    // train leave a station
    .add([
      TweenLite.to('#train', 1000 * animKoef, {
        x: '50%',
        delay: 5000 * animKoef,
      }),
    ]);

  return new ScrollMagic.Scene({
    triggerElement: `#station-${stationNumber}-trigger`, // trigger-id
    duration: '500%',
  })
    .setClassToggle(`#menu-station-${stationNumber}`, 'menu-item-active') // menu-id
    .setTween(trainStationTimeline);
};

const makeTrainStation10Scene = () => {
  const trainStationTimeline = new TimelineLite()
    // train stop on station
    .add([
      TweenLite.to('#train', 1000 * animKoef, {
        x: '-50%',
        delay: 5000 * animKoef,
      }),
    ]);

  return new ScrollMagic.Scene({
    triggerElement: '#station-10-trigger', // trigger-id
    duration: '220%',
  })
    .setClassToggle('#menu-station-10', 'menu-item-active') // menu-id
    .setTween(trainStationTimeline);
};


const makeTrainEndScene = () => {
  const trainEndTween = TweenLite.to('#train', 1, {
    x: '180%',
    ease: Linear.easeNone,
  });

  return new ScrollMagic.Scene({
    triggerElement: '#train-end-trigger',
    duration: '100%',
  })
    .setTween(trainEndTween);
};

export default (container) => {
  makeTrainStartScene().addTo(container);
  makeTrainStationScene(1).addTo(container);
  makeTrainStationScene(2).addTo(container);
  makeTrainStationScene(3).addTo(container);
  makeTrainStationScene(4).addTo(container);
  makeTrainStationScene(5).addTo(container);
  makeTrainStationScene(6).addTo(container);
  makeTrainStationScene(7).addTo(container);
  makeTrainStationScene(8).addTo(container);
  makeTrainStationScene(9).addTo(container);
  makeTrainStation10Scene().addTo(container);
  makeTrainEndScene().addTo(container);
};
