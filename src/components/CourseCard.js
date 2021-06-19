import React, { useEffect, useState } from 'react';
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
  Card,
  CardContent,
  Typography,
  Avatar,
  CardHeader,
  CardActions,
  Button,
} from '@material-ui/core';
import { blue, purple } from '@material-ui/core/colors';
import { Radar } from 'react-chartjs-2';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { Link } from "react-router-dom";

import { fetchChartData } from "./api";

import { routePath } from "./constants";

function CourseCard({icon}) {

  const [data, setData] = useState([0, 0, 0, 0, 0]);
  useEffect(() => {
    async function fetchData() {
      return await fetchChartData();
    }
    fetchData().then((response) => setData(response));
  }, []);

  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });
  const classes = useStyles();

  const theme = createMuiTheme({
    overrides: {
      MuiCardHeader: {
        root: {height: 100},
      }
    },
  });

  // const data = [4, 2, 5, 1, 8];
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
    <Card className={classes.root} elevation={4}>
      <ThemeProvider theme={theme}>
        <CardHeader
          avatar={
            <Avatar style={{backgroundColor: purple[300], width: 75, height: 75}}>
              {
                React.cloneElement(icon,
                  {style: {fontSize: 40}}
                )
              }
            </Avatar>
          }
          title={
            <Typography variant='h6'>CS 3350</Typography>
          }
          subheader={
            <>
              <Typography variant='subtitle1'>Computer Organization</Typography>
              <Typography variant='subtitle2'>Prof. Alex Brandt</Typography>
            </>
          }
        />
      </ThemeProvider>
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
            data: data,
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
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Course Description:
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          The course is designed to give students an appreciation of hardware, its design, its implementation, and the
          impact of all of this on how software runs on the hardware. We will look at the general topics:
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Link to={`/${routePath.course}/:randomID`} style={{ textDecoration: 'none' }}>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export { CourseCard }