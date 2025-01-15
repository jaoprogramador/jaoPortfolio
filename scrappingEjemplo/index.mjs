import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  // Reemplaza esta URL por la dirección de la página que deseas scrapear
  await page.goto('https://www.amazon.es/s?k=amazon+redmi+note+13&adgrpid=157014762613&gad_source=1&hvadid=685826145016&hvdev=c&hvlocphy=9049233&hvnetw=g&hvqmt=e&hvrand=10828370508220572950&hvtargid=kwd-2158018514799&hydadcr=3196_2408101&tag=hydes-21&ref=pd_sl_4ajtuenxrv_e');

  // Extraer productos desde los contenedores
  const products = await page.$$eval('.s-card-container', (results) =>
    results.map((el) => {
      const title = el.querySelector('h2')?.innerText;
      if (!title) return null;

      const image = el.querySelector('img')?.getAttribute('src');
      const price = el.querySelector('.a-offscreen')?.innerText;
      const link = el.querySelector('.a-link-normal')?.getAttribute('href');

      return { title, image, price, link };
    }).filter(Boolean) // Elimina elementos nulos
  );

  console.log(products);

  await browser.close();
})();
