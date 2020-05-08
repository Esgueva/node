const puppeteer = require("puppeteer");
(async () => {
  console.log("Starting Navigation...");
  const browser = await puppeteer.launch({
    //Interface Nav
    //headless: false,
  });

  const page = await browser.newPage();
  await page.goto("http://es.wikipedia.org/wiki/Node.js");

  var title = await page.evaluate(() => {
    return document.querySelector("h1").innerHTML;
  });

  console.log(`TITLE: ${title}`);

  console.log("Closing Navigation...");
  browser.close();
  console.log("Exit");
})();
