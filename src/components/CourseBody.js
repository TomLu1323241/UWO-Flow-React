import { useParams } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import { routePathID } from "./constants";
import React, { useEffect, useState } from "react";
import { Avatar, Typography } from "@material-ui/core";
import ComputerIcon from "@material-ui/icons/Computer";
import { Radar } from "react-chartjs-2";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { blue } from "@material-ui/core/colors";

import { fetchCourseData } from "./api";

import { CourseAccordion } from "./CourseAccordion";

function CourseBody() {
  let courseID = useParams()[routePathID.course].substr(1);
  const [data, setData] = useState('loading...');
  useEffect(() => {
    fetchCourseData(courseID).then((response) => setData(response));
  }, []);
  const options = {
    legend: {
      position: "right",
    },
    scale: {
      beginAtZero: true,
      min: 0,
      max: 10,
      stepSize: 2,
      ticks: {
        beginAtZero: true,
        min: 0,
        max: 10,
        stepSize: 2,
      },
    },
  };

  return (
    <>
      <Container>
        <Row style={{paddingBottom: 10, paddingTop: 10}}>
          <Col xs={3} style={{display: 'flex', justifyContent: 'center'}}>
            <Avatar style={{height: 150, width: 150}}>
              <ComputerIcon style={{fontSize: 100}}/>
            </Avatar>
          </Col>
          <Col xs={5} style={{alignItems: 'bottom'}}>
            <Typography variant={"h1"}>{data.courseTitle}</Typography>
            <Typography variant='subtitle1'>Computer Organization</Typography>
            <Typography variant='subtitle2'>Prof. Alex Brandt</Typography>
          </Col>
          <Col xs={4}>
            <Radar
              data={{
                labels: [
                  "enjoyment",
                  "relevance",
                  "workLoad",
                  "easiness",
                  "expectedGrade",
                ],
                datasets: [{
                  label: 'CS 3350',
                  data: data.courseRatings,
                  backgroundColor: fade(blue[800], 0.2),
                  borderColor: blue[800],
                  pointBackgroundColor: blue[800],
                  pointBorderColor: '#fff',
                  pointHoverBackgroundColor: '#fff',
                  pointHoverBorderColor: blue[800],
                }],
              }}
              options={options}
              height={300}
              width={300}
              style={{padding: 10}}
            />
          </Col>
        </Row>
        <Row style={{paddingBottom: 10, paddingTop: 10}}>
          <Col>
            <Typography variant={"h4"}>Course Description:</Typography>
            <Typography variant={"body1"}>{data.courseDescription}</Typography>
          </Col>
        </Row>
        <Row style={{paddingBottom: 10, paddingTop: 10}}>
          <Col>
            <CourseAccordion/>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export { CourseBody }