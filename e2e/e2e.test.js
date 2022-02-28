import  puppeteer  from 'puppeteer';
import { fork } from 'child_process';

jest.setTimeout(30000);
describe('test Popap form', () =>{
  let browser = null;
  let page = null;
  let server = null;
  const baseUrl = 'http://localhost:9000';

  beforeAll(async () => {
    server = fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on('error', reject);
      server.on('message', (message) => {
        if (message === 'ok') {
          resolve();
        }
      });
    });

    browser = await puppeteer.launch({
      headless: false, // show
      // slowMo: 100,
      // devtools: true, // show devTools
    });
    page = await browser.newPage();
  });

  test('Test show popup', async () => {
    await page.goto(baseUrl);
    const buttAdd = await page.$('[id = bn]');
    await buttAdd.click();
    page.waitForSelector('[class = head]');
  })

  afterAll(async () => {
    await browser.close();
  });
})
