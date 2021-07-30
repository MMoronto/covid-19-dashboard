import React, { useState, useEffect } from "react";
import {
  MenuItem, 
  FormControl, 
  Select,
} from "@material-ui/core";
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch ("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data) => {
        const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2, // UK, USA, FR
          }));

          setCountries(countries);
      });
    };

    getCountriesData();
  }, []);

  return (
    <div className="app">
      <div className="app__header">
        <h1>COVID-19 TRACKER</h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" value={country}>
            <MenuItem value="worldwide">Worldwide</MenuItem>
            {countries.map((country) => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))}

        {/* <MenuItem value="worldwide">Worldwide</MenuItem>
            <MenuItem value="worldwide">Option two</MenuItem>
            <MenuItem value="worldwide">Option 3</MenuItem>
            <MenuItem value="worldwide">Option iv</MenuItem> */}
          </Select>
        </FormControl>        
      </div>



      {/* Header */}
      {/* Title + Select input dropdown field */}

      {/* info box */}
      {/* info box */}
      {/* info box */}

      {/* Table */}
      {/* Graph */}

      {/* Map */}
    </div>
  );
}

export default App;
