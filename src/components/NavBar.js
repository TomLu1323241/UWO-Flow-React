import React from 'react';
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { SearchBar } from "./SearchBar";

function NavBar() {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    search: {
      position: 'relative',
      flexGrow: 1,
    },
  }));
  const classes = useStyles();
  // TODO: fix css for search bar
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          News
        </Typography>
        <div className={classes.search}>
          <SearchBar />
        </div>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
}

export { NavBar };