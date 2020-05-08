const promise = new Promise((res, rej) => {
  setTimeout(() => {
    if (Math.random() < 0.5) {
      res("Return Data");
    } else {
      rej(new Error("Return Error"));
    }
  }, 300);
});

promise
  .then((msg) => msg.toUpperCase())
  .then((msg) => console.log("MESSAGE:", msg))
  .catch((err) => console.log("ERROR: ", err));
