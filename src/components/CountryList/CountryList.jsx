import { Grid, Card, makeStyles, CardActionArea, CardMedia, CardHeader, Divider, CardContent, Button, Typography, CardActions } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { CapitalWeather } from './../CapitalWeather/CapitalWeather';
import {getCapitalWatherDetailApi} from './../../api/api'

const useStyles = makeStyles({
  container: {
    margin: "20px auto",
    padding: "30px",
    maxWidth: "900px"
  },
  root: {
    maxWidth: 400,
  },
  media: {
    height: 160,
  },
  buttonStyle:{
    fontSize:"10px"
  }
});

export const CountryList = (props) => {
  const classes = useStyles();
  const [countries, setCountries] = useState([]);
  const [capital, setCapital] =  useState([]);
  const [weatherDetail, setWeatherDetail] =  useState([]);
  const [showWeatherDetail, setShowWeatherDetail] =  useState(false);
  const { countryList } = props;

  useEffect(() => {
    if(countryList && countryList.length > 0){
      setCountries(countryList)
    }
    else{
      const dataList = localStorage.getItem("countries");
      setCountries(JSON.parse(dataList));
    }
  }, []);

  const handleCapitalWeather = (capitalName) => {
    if(capitalName){
      setCapital(capitalName);
      setShowWeatherDetail(true);
      getCapitalWatherDetailApi(capitalName)
      .then((response)=>{
        if(response){
          setWeatherDetail(response.data.current)
        }
      })
    }

  }
  
  return (
    <Card className={classes.container}>
      <Grid container spacing={3}>
      <Grid item md={12} sm={12} xs={12} >
      <Typography gutterBottom variant="h5" component="h2">
        Country List
      </Typography>
      </Grid>
        {
          countries && countries.length > 0 && countries.map( country =>
          (
          <Grid item md={4} sm={4} xs={6} key={country.name}>
            <Card className={classes.root}>
              <CardActionArea>
              <CardHeader
                title={country.name}
              />
                <CardMedia
                  className={classes.media}
                  image={country.flag}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h4">
                   Capital:  { country.capital}
                  </Typography>
                  <br/>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Population: {country.population}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Laitude, Langitude: {country.latlng[0]}, {country.latlng[1]}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <br/>
                { showWeatherDetail && capital === country.capital ? (
                  <div>
                    <Divider />
                    <CapitalWeather capitalWeatherDetail={weatherDetail} openModal={true}/>
                    <br/>
                    <Button 
                      variant="contained" 
                      color="secondary" 
                      className={classes.buttonStyle}
                      onClick={()=> setShowWeatherDetail(false)}>
                        Close Weather Detail
                    </Button>
                  </div>
                ) :
                ( <Button 
                    variant="contained" 
                    color="secondary" 
                    onClick={()=> handleCapitalWeather(country.capital)}>
                    Capital Weather
                </Button>)
                }
                <br/>
              </CardActions>
            </Card>
          </Grid>
          )
        )}
      </Grid>
    </Card>
  );
};
