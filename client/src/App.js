import React, { useReducer } from'react';
import HomePage from './views/homepage';
import Patient from './views/patient';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green, purple} from '@mui/material/colors';
import { Button } from '@mui/material';

const theme = createTheme({
  components: {
    MuiButton:{
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
    <div className="App">
      <Patient />
    </div>
    </ThemeProvider>
  );
}

export default App;
