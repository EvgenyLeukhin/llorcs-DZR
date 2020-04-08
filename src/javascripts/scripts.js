import ScrollMagic from 'scrollmagic';
import { TimelineLite, TweenLite } from 'gsap';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';
import 'gsap/ScrollToPlugin';

// Scenes
import addBackgroundScenes from './scenes/background';
import addTrainScenes from './scenes/train';
import addBridgeScenes from './scenes/bridge';
import addStartScenes from './scenes/start-scene';
import addStationScenes from './scenes/station-scene';
import addEndScenes from './scenes/end-scene';

// scroll to top when refresh page
window.onbeforeunload = () => window.scrollTo(0, 0);

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

// Adding scenes
addBackgroundScenes(controller);
addTrainScenes(controller);
addBridgeScenes(controller);
addStartScenes(controller);
addStationScenes(controller);
addEndScenes(controller);

// Init anchors
document.getElementById('menu')
  .querySelectorAll('a')
  .forEach((linkEl) => {
    linkEl.addEventListener('click', (e) => {
      e.preventDefault();

      controller.scrollTo(e.target.getAttribute('href'));
    });
  });
