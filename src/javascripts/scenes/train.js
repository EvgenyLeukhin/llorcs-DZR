import ScrollMagic from 'scrollmagic';
import { Linear, TimelineLite, TweenLite } from 'gsap';

const makeTrainStartScene = () => {
  const trainStartTween = TweenLite.fromTo('#train', 1, {
    x: '-50%',
  }, {
    x: '50%',
    ease: Linear.easeNone,
  });

  return new ScrollMagic.Scene({
    triggerElement: '#train-start-trigger',
    duration: '100%',
  })
    .setTween(trainStartTween);
};

const makeTrainStationScene = (stationNumber) => {
  const trainStationTimeline = new TimelineLite()
    .add([
      TweenLite.to('#train', 1000, {
        x: '0%',
      }),
    ])
    .add([
      TweenLite.to('#train', 1000, {
        x: '50%',
        delay: 2000,
      }),
    ]);

  return new ScrollMagic.Scene({
    triggerElement: `#train-station-${stationNumber}-trigger`,
    duration: '100%',
  })
    .setClassToggle(`#menu-station-${stationNumber}`, 'menu-item-active')
    .setTween(trainStationTimeline);
};

const makeTrainEndScene = () => {
  const trainEndTween = TweenLite.to('#train', 1, {
    x: '150%',
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
