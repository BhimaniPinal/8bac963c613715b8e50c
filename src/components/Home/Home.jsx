import { Grid, Card, makeStyles, Button, TextField  } from "@material-ui/core";
import React, { useState, useEffect, useCallback } from "react";
import {getCountryListAPI} from './../../api/api'

const useStyles = makeStyles({
  container: {
    margin: "20px auto",
    padding: "30px",
    maxWidth: "700px"
  }
});

export const Home = (props) => {
  const classes = useStyles();
  const [countryName, setCountryName] = useState("");

  const {handleCountryList} =  props;

  useEffect(() => {
    // code for on render data binding
  }, []);

  const handleCountryInput = (event) => {
    if(event && event.target && event.target.value){
      setCountryName(event.target.value);
      console.log(event.target.value)
    }
  };

  const getCountryList = () => {
    if(countryName){
      getCountryListAPI(countryName)
      .then((response) => {
        handleCountryList(response.data);
      })
      .catch((e) => {
        console.log("Error Message", e)
      })
    }
  }
  
  return (
    <Card className={classes.container}>
      <Grid container spacing={4}>
        <Grid item xs={12} >
          <TextField id="outlined-basic" label="Enter country" variant="outlined" fullWidth value={countryName} onChange={handleCountryInput}/>
        </Grid>
        <Grid item xs={12} >
          <Button variant="contained" color="secondary" onClick={getCountryList} disabled={countryName === ""}>
            submit 
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};
