const consoleAux = new console.Console(process.stdout, process.stderr);
let fecha = new Date();
consoleAux.printInfo = (msg = "") => {
  console.info(
    "\x1b[36m%s\x1b[0m",
    "[Information] - " + fecha + ":: ",
    "\x1b[0m",
    "\n\t >> " + msg
  );
};

consoleAux.printWarn = (msg = "") => {
  console.warn(
    "\x1b[33m%s\x1b[0m",
    "[Warning] - " + fecha + ":: ",
    "\x1b[0m",
    "\n\t >> " + msg
  );
};

consoleAux.printErr = (msg = "") => {
  console.error(
    "\x1b[31m%s\x1b[0m",
    "[Error] - " + fecha + ":: ",
    "\x1b[0m",
    "\n\t >> " + msg
  );
};

consoleAux.printSuc = (msg = "") => {
  console.log(
    "\x1b[32m%s\x1b[0m",
    "[Success]  - " + fecha + ":: ",
    "\x1b[0m",
    "\n\t >> " + msg
  );
};

consoleAux.printInfo("Mensaje de información.");
consoleAux.printWarn("Mensaje de advertencia.");
consoleAux.printErr("Mensaje de error.");
consoleAux.printSuc("Mensaje de éxito.");
