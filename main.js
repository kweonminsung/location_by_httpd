import fs from 'fs/promises';
import fetch from 'node-fetch';
import { loadingAnimation } from './loader.js';

const IPs = new Set();
const result = {
  data: [],
};

(async function () {
  try {
    const log_files = await fs.readdir('./input');
    for (let file_name of log_files) {
      console.log(`Reading log files: ${file_name}`);

      const file = await fs.readFile('input/' + file_name);
      file
        .toString()
        .split('\n')
        .forEach(line => {
          IPs.add(line.split(' ')[0]);
        });
    }

    const loader = loadingAnimation('Requesting Location Data...');
    for (let ip of IPs) {
      const response = await (
        await fetch('https://geolocation-db.com/jsonp/' + ip)
      ).text();
      result.data.push(JSON.parse(response.split('(')[1].slice(0, -1)));
    }
    clearInterval(loader);

    fs.writeFile('result.json', JSON.stringify(result));
    console.log('Done\n== Check out result.json ==');
  } catch (err) {
    console.log(err);
  }
})();
