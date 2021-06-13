import { Container, Row, Col } from "react-bootstrap";
import { Typography } from "@material-ui/core";
import ComputerIcon from "@material-ui/icons/Computer";

import { CourseCard } from "./CourseCard";

function LandingPage() {
  const card = <CourseCard icon={<ComputerIcon />} />;
  let body = [];
  for (let i = 0; i < 3; i++) {
    let bodyRow = [];
    for (let j = 0; j < 3; j++) {
      bodyRow.push(<Col>{card}</Col>);
    }
    body.push(<Row style={{ paddingBottom: 10, paddingTop: 10}}>{bodyRow}</Row>);
  }

  return(
    <>
      <Container>
        <Row style={{ paddingBottom: 10, paddingTop: 10, justifyContent: 'center' }}>
          <Typography variant='h1'>Hello</Typography>
        </Row>
        {body}
      </Container>
    </>
  );
}

export { LandingPage }