import axios from "axios";

export const getCountryListAPI = (countryName) => {
  return axios.get(`${process.env.REACT_APP_COUNTRY_URL}${countryName}`);
};

export const getCapitalWatherDetailApi = (capitalName) => {
  return axios.get(`${process.env.REACT_APP_CAPITAL_WEATHER_URL}?access_key=${process.env.REACT_APP_WEATHER_API_KEY}&query=${capitalName}`);
}