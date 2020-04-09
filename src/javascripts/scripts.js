import ScrollMagic from 'scrollmagic';
import { TimelineLite, TweenLite } from 'gsap';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';
import 'gsap/ScrollToPlugin';

// scenes
import backgroundScenes from './scenes/background';
import trainScenes from './scenes/train';
import startScene from './scenes/start-scene';
import station1 from './scenes/station-1';
import endScene from './scenes/end-scene';

// scroll to top when refresh page
// window.onbeforeunload = () => window.scrollTo(0, 0);

// Base setup
ScrollMagicPluginGsap(ScrollMagic, TweenLite, TimelineLite);

// Init controller
const controller = new ScrollMagic.Controller();

controller.scrollTo((y) => {
  TweenLite.to(window, 1, {
    scrollTo: {
      y,
    },
  });
});

// adding scenes
backgroundScenes(controller);
trainScenes(controller);
startScene(controller);
station1(controller);
endScene(controller);

// Init anchors
document.getElementById('menu')
  .querySelectorAll('a')
  .forEach((linkEl) => {
    linkEl.addEventListener('click', (e) => {
      e.preventDefault();

      controller.scrollTo(e.target.getAttribute('href'));
    });
  });
