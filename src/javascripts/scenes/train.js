import ScrollMagic from 'scrollmagic';
import { Linear, TweenLite, TimelineLite } from 'gsap';

const makeTrainStartScene = () => {
  const trainStartTween = new TimelineLite()
    .add([
      TweenLite.fromTo('#train', 1, {
        x: '-80%',
      }, {
        x: '50%',
        ease: Linear.easeNone,
      }),
      TweenLite.to('#train-smoke', 1, { x: -33, skewX: 40, ease: Linear.easeNone }),
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
      TweenLite.to('#train', 1000, {
        x: '-50%',
        delay: 900,
      }),
      TweenLite.to('#train-smoke', 1, {
        x: 0,
        skewX: 0,
        delay: 900,
        ease: Linear.easeNone,
      }),
    ])

    // train leave a station
    .add([
      TweenLite.to('#train', 1000, {
        x: '50%',
        delay: 1000,
      }),
      TweenLite.to('#train-smoke', 1, {
        x: -33,
        skewX: 40,
        delay: 1000,
        ease: Linear.easeNone,
      }),
    ]);

  return new ScrollMagic.Scene({
    triggerElement: `#station-${stationNumber}-trigger`, // trigger-id
    duration: '250%',
  })
    .setClassToggle(`#menu-station-${stationNumber}`, 'menu-item-active') // menu-id
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
  makeTrainStartScene()
    .addTo(container);
  makeTrainStationScene(1)
    .addTo(container);
  makeTrainStationScene(2)
    .addTo(container);
  makeTrainEndScene()
    .addTo(container);
};
