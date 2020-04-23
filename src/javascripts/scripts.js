import Preload from 'preload-it';
import ScrollMagic from 'scrollmagic';
import { TimelineLite, TweenMax } from 'gsap';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

// backgrounds
import bgRoadScenes from './scenes/bg-road-rails';
import bgWheelsScenes from './scenes/bg-wheels';
import bgRoadsClouds from './scenes/bg-roads-clouds';
import bgStationsScenes from './scenes/bg-station-rails';
import bgMenuScene from './scenes/bg-menu';
import trainScenes from './scenes/train';
import startScene from './scenes/start-scene';

// stations
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

// scroll to top when refresh page
window.onbeforeunload = () => window.scrollTo(0, 0);
window.scrollTo(0, 0);

const scrollPlugin = ScrollToPlugin;

// Base setup
ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineLite);
const controller = new ScrollMagic.Controller();

controller.scrollTo((y) => {
  TweenMax.to(window, 1, {
    scrollTo: {
      y,
    },
  });
});

startScene(controller);

// Init
function init() {
  // adding scenes
  bgRoadScenes(controller);
  bgStationsScenes(controller);
  bgWheelsScenes(controller);
  bgMenuScene(controller);
  trainScenes(controller);

  // roads
  bgRoadsClouds(controller);

  // stations
  const stationScenes = [
    station1(controller),
    station2(controller),
    station3(controller),
    station4(controller),
    station5(controller),
    station6(controller),
    station7(controller),
    station8(controller),
    station9(controller),
    station10(controller),
  ];

  function toggleStateStationScenes(state, exceptStationNumbers = []) {
    stationScenes.forEach((cStationScenes, index) => {
      if (exceptStationNumbers.includes(index + 1)) {
        return;
      }

      cStationScenes.forEach((stationScene) => {
        stationScene.enabled(state);
      });
    });
  }

  function getCurrentSceneNumber() {
    for (let i = 0; i < stationScenes.length; i += 1) {
      if (
        stationScenes[i].find((stationScene) => (
          stationScene.state() === 'DURING'
        ))
      ) {
        return i + 1;
      }
    }

    return null;
  }

  // Init anchors
  document.querySelector('#menu')
    .querySelectorAll('a')
    .forEach((linkEl) => {
      linkEl.addEventListener('click', (e) => {
        e.preventDefault();

        if (scrollPlugin) {
          const stationNumber = parseInt(e.target.getAttribute('href').replace(/\D/g, ''), 10);
          toggleStateStationScenes(false, [
            stationNumber,
            getCurrentSceneNumber(),
          ]);
          const triggerElement = document.getElementById(e.target.getAttribute('href').slice(1));
          const scrollTo = triggerElement.offsetTop + (triggerElement.offsetHeight * 0.3);
          TweenMax.to(window, 1, {
            scrollTo: {
              y: scrollTo,
              behavior: 'smooth',
            },
            onComplete: () => {
              toggleStateStationScenes(true);
            },
          });
        }
      });
    });
}

// Preload
const $progress = document.getElementById('loading-progress');
const $progressNumber = document.getElementById('loading-progress-number');
const $progressBar = document.getElementById('loading-progress-bar');

const preload = Preload();

preload.onprogress = (e) => {
  $progressNumber.innerText = `${e.progress}%`;
  $progressBar.style.transform = `translateX(${e.progress - 100}%)`;
};

fetch('/assets.json')
  .then((response) => response.json())
  .then((assets) => {
    preload.fetch(assets)
      .then(() => {
        document.getElementById('stations').style.visibility = 'visible';
        document.getElementById('train').style.visibility = 'visible';
        document.getElementById('arrow-down-btn').style.visibility = 'visible';
        document.getElementById('footer').style.visibility = 'visible';
        document.getElementById('triggers').style.visibility = 'visible';
        $progress.style.display = 'none';

        init();
      });
  });

// Window resize
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

  if (controller) {
    controller.update(true);
  }
}

windowResize();

setTimeout(() => {
  windowResize();
}, 100);

window.addEventListener('resize', () => {
  windowResize();
});
