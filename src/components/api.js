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

async function fetchCourseData(courseID) {
  return {
    courseTitle: 'CS 3350',
    courseDescription: 'The course is designed to give students an appreciation of hardware, its design, its ' +
      'implementation, and the impact of all of this on how software runs on the hardware. We will look at the general topics:',
    courseID: courseID,
    courseRatings: await fetchChartData(),
  };
}

export { fetchChartData, fetchCourseData }