const os = require("os");

console.log("CPU info: ", os.cpus());
console.log(
  "IP Address: ",
  os.networkInterfaces().en0.map((i) => i.address)
);
console.log("Free Memory: ", os.freemem());
console.log("Type OS: ", os.type());
console.log("OS Version: ", os.release());
console.log("User info : ", os.userInfo());
