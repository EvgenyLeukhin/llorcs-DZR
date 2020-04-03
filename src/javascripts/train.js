import ScrollMagic from 'scrollmagic';
import { Linear, TimelineLite, TweenLite } from 'gsap';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';

ScrollMagicPluginGsap(ScrollMagic, TweenLite, TimelineLite);

const trainStartTween = TweenLite.fromTo('#train', 1, {
  css: { left: '-50%' },
}, {
  css: { left: '50%' },
  ease: Linear.easeNone,
});

const trainEndTween = TweenLite.to('#train', 1, {
  css: { left: '150%' },
});

const trainStartScene = new ScrollMagic.Scene({
  duration: 1000,
  offset: 1000,
})
  .setTween(trainStartTween);

const makeTrainStationScene = (stationNumber) => {
  const trainStationTimeline = new TimelineLite()
    .add([
      TweenLite.to('#train', 500, {
        css: { left: 0 },
      }),
    ])
    .add([
      TweenLite.to('#train', 500, {
        css: { left: '50%' },
        delay: 2000,
      }),
    ]);

  return new ScrollMagic.Scene({
    triggerElement: `#train-station-${stationNumber}-trigger`,
    duration: 2000,
  })
    .setClassToggle(`#menu-station-${stationNumber}`, 'menu-item-active')
    .setTween(trainStationTimeline);
};

const trainEndScene = new ScrollMagic.Scene({
  duration: 1000,
  triggerElement: '#train-end-trigger',
})
  .setTween(trainEndTween);

export default (container) => {
  trainStartScene.addTo(container);
  makeTrainStationScene(1).addTo(container);
  makeTrainStationScene(2).addTo(container);
  trainEndScene.addTo(container);
};
