const promiseFunction = () =>
  new Promise((res, rej) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        res("Return Data");
      } else {
        rej(new Error("Return Error"));
      }
    }, 300);
  });

async function asyncAwait() {
  try {
    const msg = await promiseFunction();
    console.log("MESSAGE: ", msg);
  } catch (err) {
    console.log("ERROR: ", err);
  }
}

asyncAwait();
