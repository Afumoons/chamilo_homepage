// import scrollmagic
import ScrollMagic from "./node_modules/scrollmagic/scrollmagic/minified/plugin";

// new scrollmagic controller
const controller = new ScrollMagic.Controller();

// create scene
const scene = new ScrollMagic.Scene({
  // duration of scene
  duration: 1000,
  // offset of scene
  offset: 100,
})
  .setPin("#pin-target")
  .addTo(controller);

console.log(chalk.yellow.bgBlue(validator.isEmail("afumoons@gmail.com")));
