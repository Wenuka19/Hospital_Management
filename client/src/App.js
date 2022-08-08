import React, { useReducer } from 'react';
import HomePage from './views/homepage';
import Patient from './views/patient';
import Home from './views/homepage';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';
import { Button } from '@mui/material';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "15px"
        }
      }
    }
  },
  palette: {
    primary: {
      main: "#6495AD"
    }
  },
})

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/patient">
              <Patient />
            </Route>
          </Switch>
        </div>

      </Router>
    </ThemeProvider>
  );
}

export default App;
