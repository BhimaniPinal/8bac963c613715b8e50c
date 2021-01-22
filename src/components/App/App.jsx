import "./App.css";
import { Route, Router, Switch, useHistory} from "react-router-dom";
import { Home } from "./../Home/Home";
import { Navbar } from "./../Navbar/Navabar";
import React, {useState, useCallback} from "react";
import * as route from "./../../routes/route";
import { CountryList } from './../CountryList/CountryList';
import history from "./../../routes/history"

function App() {
  const [countryList, setCountryList] = useState([]);

  const handleCountryList = useCallback((countries)=>{
    if(countries && countries.length > 0){
      setCountryList(countries);
      localStorage.setItem("countries", JSON.stringify(countries))
      history.push(route.countryList)
    }
  },[])

  return (
    <div className='App'>
      <Navbar />
      <Router history={history}>
        <Switch>
        <Route path={route.home} exact>
          <Home handleCountryList={handleCountryList}/>
        </Route>
        <Route path={route.countryList} exact>
          <CountryList countryList={countryList}/>
        </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
