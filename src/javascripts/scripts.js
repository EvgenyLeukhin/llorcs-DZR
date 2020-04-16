import ScrollMagic from 'scrollmagic';
import { TimelineLite, TweenLite } from 'gsap';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';
import 'gsap/ScrollToPlugin';

// scenes
import backgroundScenes from './scenes/background';
import trainScenes from './scenes/train';
import startScene from './scenes/start-scene';
import road1 from './scenes/roads/road-1';
import road2 from './scenes/roads/road-2';
import road3 from './scenes/roads/road-3';
import road4 from './scenes/roads/road-4';
import road5 from './scenes/roads/road-5';
import road6 from './scenes/roads/road-6';
import road7 from './scenes/roads/road-7';
import road8 from './scenes/roads/road-8';
import road9 from './scenes/roads/road-9';
import road10 from './scenes/roads/road-10';
import station1 from './scenes/stations/station-1';
import station2 from './scenes/stations/station-2';
import station3 from './scenes/stations/station-3';
import station4 from './scenes/stations/station-4';
import station5 from './scenes/stations/station-5';
import station6 from './scenes/stations/station-6';
import station7 from './scenes/stations/station-7';
import station8 from './scenes/stations/station-8';
import station9 from './scenes/stations/station-9';
import station10 from './scenes/stations/station-10';
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

// roads
road1(controller);
road2(controller);
road3(controller);
road4(controller);
road5(controller);
road6(controller);
road7(controller);
road8(controller);
road9(controller);
road10(controller);

// stations
startScene(controller);
station1(controller);
station2(controller);
station3(controller);
station4(controller);
station5(controller);
station6(controller);
station7(controller);
station8(controller);
station9(controller);
station10(controller);
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
