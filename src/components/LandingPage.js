import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Box } from "@material-ui/core";

import { CourseCard } from "./CourseCard";
import { Container, Row, Col } from "react-bootstrap";

function LandingPage() {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
  }));

  return(
    <>
      <Container>
        <Row style={{ paddingBottom: 10, paddingTop: 10, justifyContent: 'center' }}>
          <Typography variant='h1'>Hello</Typography>
        </Row>
        <Row>
          <Col>
            <CourseCard />
          </Col>
          <Col>
            <CourseCard />
          </Col>
          <Col>
            <CourseCard />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export { LandingPage }