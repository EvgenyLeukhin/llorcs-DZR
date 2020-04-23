import ScrollMagic from 'scrollmagic';
import { Linear, TimelineLite, TweenMax } from 'gsap';

const animKonf = 2;

const makeStartScene = () => {
  const startSceneTimeline = new TimelineLite()

    // анимация на появление при загрузке длительностью 500
    .add([
      TweenMax.to('#start-scene', 500 * animKonf, {
        css: { display: 'block' },
      }),
    ])

    // анимация на исчезновение продолжительностью 500 + параллельные анимации картинок 500
    .add([
      TweenMax.to('#start-scene', 500 * animKonf, {
        css: { display: 'none' },
        ease: Linear.easeNone,
      }),

      // animate cards
      TweenMax.to('.start-scene-photo-1', 500 * animKonf, { y: 1000, ease: Linear.easeNone }),
      TweenMax.to('.start-scene-photo-2', 500 * animKonf, { y: -1000, ease: Linear.easeNone }),
      TweenMax.to('.start-scene-photo-3', 500 * animKonf, { x: 1000, y: -1000, ease: Linear.easeNone }),
      TweenMax.to('.start-scene-photo-4', 500 * animKonf, { x: 1000, ease: Linear.easeNone }),
      TweenMax.to('.start-scene-photo-5', 500 * animKonf, { x: -1000, y: -1000, ease: Linear.easeNone }),
      TweenMax.to('.start-scene-photo-6', 500 * animKonf, { x: -1000, ease: Linear.easeNone }),
      TweenMax.to('.start-scene-photo-7', 500 * animKonf, { x: 1000, y: 1000, ease: Linear.easeNone }),
      TweenMax.to('.start-scene-photo-8', 500 * animKonf, { x: -1000, y: 1000, ease: Linear.easeNone }),
      TweenMax.to('.start-scene-photo-9', 500 * animKonf, { x: 500, y: 1000, ease: Linear.easeNone }),
      TweenMax.to('.start-scene-photo-10', 500 * animKonf, { x: -500, y: 1000, ease: Linear.easeNone }),
    ]);

  return new ScrollMagic.Scene({
    triggerElement: '#start-scene-trigger',
    duration: '200%',
  })
    .setClassToggle('#menu-station-start', 'menu-item-active')
    .setTween(startSceneTimeline);
};

export default (container) => ([
  makeStartScene().addTo(container),
]);
