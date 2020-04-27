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

const scrollPlugin = ScrollToPlugin;
window.scrollTo(0, 0);

// Base setup
ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineLite);
let controller;

// Init
function init() {
  document.getElementById('stations').style.display = 'block';
  document.getElementById('train').style.displan = 'block';
  document.getElementById('triggers').style.display = 'block';

  controller = new ScrollMagic.Controller();

  startScene(controller);

  // adding scenes
  bgRoadScenes(controller);
  bgStationsScenes(controller);
  bgWheelsScenes(controller);
  bgMenuScene(controller);
  const trainStationScenes = trainScenes(controller);

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
    trainStationScenes.slice(1).forEach((cStationScene, index) => {
      if (exceptStationNumbers.includes(index + 1)) {
        return;
      }

      cStationScene.enabled(state);
    });

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

  window.scrollTo(0, 0);

  // Init anchors
  document.querySelector('#menu')
    .querySelectorAll('a')
    .forEach((linkEl) => {
      linkEl.addEventListener('click', (e) => {
        e.preventDefault();

        if (scrollPlugin) {
          const nextStationNumber = parseInt(e.target.getAttribute('href')
            .replace(/\D/g, ''), 10);
          toggleStateStationScenes(false, [
            nextStationNumber,
            getCurrentSceneNumber(),
          ]);
          const triggerElement = document.getElementById(e.target.getAttribute('href').slice(1));
          const { offsetTop, offsetHeight } = triggerElement;
          const scrollTo = offsetTop + (window.innerHeight * 0.5) + (offsetHeight * 0.22);

          TweenMax.to(window, 3, {
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

document.getElementById('arrow-down-btn')
  .addEventListener('click', (e) => {
    e.preventDefault();

    if (!controller) {
      init();
    }

    if (scrollPlugin) {
      const triggerElement = document.getElementById('scroll-alert');
      const { offsetTop, offsetHeight } = triggerElement;
      const scrollTo = offsetTop + (window.innerHeight * 0.5) + (offsetHeight * 0.36);

      TweenMax.to(window, 0, {
        scrollTo: {
          y: scrollTo,
          behavior: 'smooth',
        },
      });
    }
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
  const newFontSize = Math.max(percentage, 50)
    .toFixed(2);

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

// Preload
const $progress = document.getElementById('loading-progress');
const $progressNumber = document.getElementById('loading-progress-number');
const $progressBar = document.getElementById('loading-progress-bar');

const preload = Preload();

preload.onprogress = (e) => {
  $progressNumber.innerText = `${e.progress}%`;
  $progressBar.style.transform = `translateX(${e.progress - 100}%)`;
};

const ignoreImagesList = [
  /^images\/life-logo.(.*).svg$/,
  /^images\/rzd-logo.(.*).svg$/,
  /^images\/icon_fb.(.*).svg$/,
  /^images\/icon_ok.(.*).svg$/,
  /^images\/icon_vk.(.*).svg$/,
  /^images\/tree2.(.*).svg$/,
  /^images\/icon_te.(.*).svg$/,
  /^images\/icon_wu.(.*).svg$/,
];

fetch('/assets.json')
  .then((response) => response.json())
  .then((assets) => {
    const filteredAssets = assets.filter((asset) => (
      !ignoreImagesList.find((imageRegex) => asset.match(imageRegex))
    ));

    preload.fetch(filteredAssets)
      .then(() => {
        document.getElementById('arrow-down-btn').style.visibility = 'visible';
        $progress.style.display = 'none';
        document.body.classList.add('touch');
      });

    document.body.classList.add('init');
  });

document.querySelectorAll('[data-preload-image]')
  .forEach((imageEl) => {
    imageEl.classList.add('preload-image');

    fetch(imageEl.dataset.preloadImage)
      .then((response) => response.blob())
      .then((blob) => {
        const reader = new FileReader();
        reader.onload = () => {
          // eslint-disable-next-line no-param-reassign
          imageEl.style.backgroundImage = `url("${reader.result}")`;
          imageEl.classList.add('preload-image--loaded');
        };
        reader.readAsDataURL(blob);
      });
  });
