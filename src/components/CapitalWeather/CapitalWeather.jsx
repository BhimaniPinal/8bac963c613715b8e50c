import { Grid, Typography, Avatar, makeStyles, DialogActions, Button, Dialog, DialogTitle, DialogContent, DialogContentText } from "@material-ui/core";
import React, {  useEffect, useState } from "react";

const useStyles = makeStyles({
  headerBolck: {
   margin: "auto",
   marginTop: "5px"
  }
});

export const CapitalWeather = (props) => {
  const classes = useStyles();
  const { capitalWeatherDetail, openModal } = props;
  const {open, setOpen} = useState(openModal);

  useEffect(() => {
    // code for on render data binding
  }, []);



  return (
    <>
        {
          capitalWeatherDetail && (
            <Dialog
              open={open}
              onClose={()=> {setOpen(false) }}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <Grid item md={12} >
                  
                      <Avatar alt="Remy Sharp" src={capitalWeatherDetail.weather_icons } className={classes.headerBolck}/>
                      <Typography gutterBottom component="p">
                        Weather Detail
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        temperature: {capitalWeatherDetail.temperature}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        wind_speed: {capitalWeatherDetail.wind_speed}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        precip: {capitalWeatherDetail.precip}
                      </Typography>
                    </Grid>
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={() =>{ setOpen(false)}} color="primary">
                  Close
                </Button>
              </DialogActions>
            </Dialog>
            
          )
        }
   </>
  );
};
