import ScrollMagic from 'scrollmagic';
import { TimelineLite, TweenLite } from 'gsap';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';
import 'gsap/ScrollToPlugin';

// scenes
import bgRoadScenes from './scenes/bg-road-rails';
import bgRoadsClouds from './scenes/bg-roads-clouds';
import bgStationsScenes from './scenes/bg-station-rails';
import bgMapScene from './scenes/bg-menu';
import trainScenes from './scenes/train';
import startScene from './scenes/start-scene';
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
window.onbeforeunload = () => window.scrollTo(0, 0);

// Base setup
ScrollMagicPluginGsap(ScrollMagic, TweenLite, TimelineLite);

// Init scrollmagic
const controller = new ScrollMagic.Controller();

controller.scrollTo((y) => {
  TweenLite.to(window, 1, {
    scrollTo: {
      y,
    },
  });
});

// adding scenes
bgRoadScenes(controller);
bgStationsScenes(controller);
bgMapScene(controller);
trainScenes(controller);

// roads
bgRoadsClouds(controller);

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

      controller.scrollTo(document.getElementById(e.target.getAttribute('href').slice(1)));
    });
  });

function windowResize() {
  const preferredWidth = 1920; // px
  const preferredHeight = 1080; // px

  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  const widthPercentage = (windowWidth * 100) / preferredWidth;
  const heightPercentage = (windowHeight * 100) / preferredHeight;
  const percentage = Math.min(heightPercentage, widthPercentage);
  const newFontSize = Math.max(percentage, 50).toFixed(2);

  document.body.style.fontSize = `${newFontSize}%`;
}

windowResize();

setTimeout(() => {
  windowResize();
}, 100);

window.addEventListener('resize', () => {
  windowResize();
});
