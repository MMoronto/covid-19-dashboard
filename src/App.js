import React from "react";
import {
  MenuItem, 
  FormControl, 
  Select,
} from "@material-ui/core";
import './App.css';

function App() {
  return (
    <div className="app"> 
      <h1>COVID-19 TRACKER</h1>
      <FormControl className="app__dropdown">
        <Select
          variant="outlined"
          value="abc"
        >
          <MenuItem value="worldwide">Worldwide</MenuItem>
          <MenuItem value="worldwide">Worldwide</MenuItem>
          <MenuItem value="worldwide">Worldwide</MenuItem>
          <MenuItem value="worldwide">Worldwide</MenuItem>
        </Select>
      </FormControl>

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
