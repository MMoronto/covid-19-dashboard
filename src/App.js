import React, { useState } from "react";
import {
  MenuItem, 
  FormControl, 
  Select,
} from "@material-ui/core";
import './App.css';

function App() {
  const [countries, setCountries] = useState([
      'USA', 'UK', 'Niger'
    ]);

  // https://disease.sh/v3/covid-19/countries

  // USEEFFECT = Runs a piece of code based on a given condition

  useEffect(() => {
    // The code in here will run once 
    // when the component loads & not again after
    // async -> send a request, wait for it, do something with it

    const getCountriesData = async () => {
      await fetch ("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data) => {
        
      })
    }
  }, []);

  return (
    <div className="app">
      <div className="app__header">
        <h1>COVID-19 TRACKER</h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" value="abc">
            {/* Loop through all the countries & show a drop down list of the options*/}

            {countries.map((country) => (
                <MenuItem value={country}>{country}</MenuItem>
              ))}

        {/* <MenuItem value="worldwide">Worldwide</MenuItem>
            <MenuItem value="worldwide">Option two</MenuItem>
            <MenuItem value="worldwide">Option 3</MenuItem>
            <MenuItem value="worldwide">Option iv</MenuItem>*/}
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
