import { useParams } from 'react-router-dom';

import { routePathID } from "./constants";

function CourseBody() {
  let courseID = useParams()[routePathID.course].substr(1);
  return (
    <h1>This is the course body with this courseID: {courseID}</h1>
  );
}

export { CourseBody }