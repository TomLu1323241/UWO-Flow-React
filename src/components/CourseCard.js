import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Avatar, CardHeader } from "@material-ui/core";
import { purple } from '@material-ui/core/colors';
import ComputerIcon from '@material-ui/icons/Computer';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Radar } from 'react-chartjs-2';


function CourseCard() {

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
      // Style sheet name ⚛️
      MuiCardHeader: {
        root: {height: 100},
      }
    },
  });

  const data = [4, 2, 5, 1, 8];
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
    <Card className={classes.root}>
      {/*<CardActionArea>*/}
        <ThemeProvider theme={theme}>
          <CardHeader
            avatar={
              <Avatar style={{backgroundColor: purple[300], width: 75, height: 75}}>
                <ComputerIcon style={{ fontSize: 40 }}/>
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
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgb(255, 99, 132)',
              pointBackgroundColor: 'rgb(255, 99, 132)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgb(255, 99, 132)',
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
            The course is designed to give students an appreciation of hardware, its design, its implementation, and the impact of all of this on how software runs on the hardware. We will look at the general topics:
          </Typography>
        </CardContent>
      {/*</CardActionArea>*/}
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export { CourseCard }