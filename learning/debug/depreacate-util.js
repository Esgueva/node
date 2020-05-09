const util = require("util");

const helloPluto = util.deprecate(() => {
  console.log("Hello pluto");
}, "Pluto is Deprecated. It isn´t a planet.");

helloPluto();
