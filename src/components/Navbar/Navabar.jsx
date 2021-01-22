import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  }
}));

export const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static' color='primary'>
        <Toolbar>
          <Typography className={classes.title} variant='h6' noWrap>
            Search Countries With Capital Weather
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
