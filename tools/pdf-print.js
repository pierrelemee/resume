import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new'
  });
  const page = await browser.newPage();

  await page.goto('http://localhost:5173/en', {
    waitUntil: 'networkidle0',
  });

  await page.pdf({
    path: path.join(__dirname, '../public/pdfs/Pierre LEMÉE - Software engineer.pdf'),
    displayHeaderFooter: false,
    headerTemplate: '',
    footerTemplate: '',
    printBackground: true,
    format: 'A4',
    margin: {
      top: 50,
      left: 50,
      right: 50,
      bottom: 50,
    }
  });

  await page.goto('http://localhost:5173/fr', {
    waitUntil: 'networkidle0',
  });

  await page.pdf({
    path: path.join(__dirname, '../public/pdfs/Pierre LEMÉE - Ingénieur logiciel.pdf'),
    displayHeaderFooter: false,
    headerTemplate: '',
    footerTemplate: '',
    printBackground: true,
    format: 'A4',
    margin: {
      top: 50,
      left: 50,
      right: 50,
      bottom: 50,
    }
  });

  await page.close();
  await browser.close();
})();
