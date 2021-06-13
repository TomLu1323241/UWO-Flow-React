function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchChartData() {
  await sleep(1000);
  const data = []
  for (let i = 0; i < 5; i++) {
    data.push(3 + Math.floor(Math.random() * 8));
  }
  return data;
}

export { fetchChartData }