const EventEmmiter = require("events");

class Logger extends EventEmmiter {
  execute(cb) {
    console.log("Before");
    this.emit("start");
    cb();
    this.emit("finish");
    console.log("After");
  }
}

const looger = new Logger();
looger.on("start", () => console.log("Starting"));
looger.on("finish", () => console.log("Finishing"));
looger.on("finish", () => console.log("It´s Done"));

looger.execute(() => console.log("Hello World"));
