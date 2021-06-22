import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Paper, Switch,
  Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow, Tooltip,
  Typography
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";


function CourseAccordion() {
  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant={"h5"}>Summer 2021</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Type</TableCell>
                  <TableCell align="center">Times</TableCell>
                  <TableCell align="center">Location</TableCell>
                  <TableCell align="center">Delivery Type</TableCell>
                  <TableCell align="center">Rating</TableCell>
                  <TableCell align="center">Toggle Compare</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell align="center"><Typography style={{fontWeight: 'bold'}}>LEC</Typography></TableCell>
                  <TableCell align="center">
                    <div align="center" style={{display: 'flex', flexWrap: 'warp', justifyContent: 'center'}}>
                      {['M', 'T', 'W', 'T', 'F'].map((item) => {
                        return (
                          <Tooltip title={'10:00am - 11:00am'} placement={'top'} arrow>
                            <Paper elevation={3} square style={{width: '30px', height: '30px'}}>
                              <Typography variant={'h6'} style={{cursor: 'pointer'}}>{item}</Typography>
                            </Paper>
                          </Tooltip>
                        );
                      })}
                    </div>
                  </TableCell>
                  <TableCell align="center">Online</TableCell>
                  <TableCell align="center">Distance Studies/Online</TableCell>
                  <TableCell align="center">
                    chart here
                  </TableCell>
                  <TableCell align="center">
                    <Switch
                      name="checkedA"
                      inputProps={{'aria-label': 'secondary checkbox'}}/>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center"><Typography style={{fontWeight: 'bold'}}>LAB</Typography></TableCell>
                  <TableCell align="center">
                    <div align="center" style={{display: 'flex', flexWrap: 'warp', justifyContent: 'center'}}>
                      {['M', 'T', 'W', 'T', 'F'].map((item) => {
                        if (Math.random() < 0.5) {
                          return (
                            <Paper elevation={3} square style={{width: '30px', height: '30px'}}>
                              <Typography variant={'h6'} style={{cursor: 'pointer'}}>{item}</Typography>
                            </Paper>
                          );
                        }
                        return (
                          <Tooltip title={'10:00am - 11:00am'} placement={'top'} arrow>
                            <Paper elevation={3} square style={{width: '30px', height: '30px'}}>
                              <Typography variant={'h6'} style={{cursor: 'pointer'}}>{item}</Typography>
                            </Paper>
                          </Tooltip>
                        );
                      })}
                    </div>
                  </TableCell>
                  <TableCell align="center">Online</TableCell>
                  <TableCell align="center">Distance Studies/Online</TableCell>
                  <TableCell align="center">
                    chart here
                  </TableCell>
                  <TableCell align="center">
                    <Switch
                      name="checkedA"
                      inputProps={{'aria-label': 'secondary checkbox'}}/>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant={"h5"}>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export { CourseAccordion }