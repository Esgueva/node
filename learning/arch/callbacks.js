const asyncCallback = (cb) => {
  setTimeout(() => {
    if (Math.random() < 0.5) {
      return cb(null, "Return Data");
    } else {
      return cb(new Error("Return Error"));
    }
  }, 500);
};

asyncCallback((err, msg) => {
  err ? console.log(err) : console.log("Data:", msg);
});
