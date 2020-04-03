import ScrollMagic from 'scrollmagic';

// Scenes
import addTrainScenes from './train';

// Base setup
const controller = new ScrollMagic.Controller();

// Adding scenes
addTrainScenes(controller);
