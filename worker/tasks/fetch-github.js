var fetch = require('node-fetch');

const baseURL = 'https://jobs.github.com/positions.json';

module.exports = async function fetchGithub() {
  const res = await fetch(baseURL);
  const jobs = await res.json();
  console.log({ jobs });
  console.log(jobs.length);
};

module.exports();
