import React, { useReducer } from'react';
import HomePage from './views/homepage';
import Patient from './views/patient';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { PatientHome } from './components/Patient Home';
import { PatientPrescription } from './components/Patient Prescription';
import { PatientHealthRecord } from './components/Patient HealthRecord';
import { PatientReport } from './components/Patient Report';
import { PatientProfile } from './components/Patient Profile';

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
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="patient" element={<Patient/>} >
          <Route path="" element={<PatientHome />} />
          <Route path="pres" element={<PatientPrescription/>} />
          <Route path="healthrecord" element={<PatientHealthRecord/>} />
          <Route path="reports" element={<PatientReport />} />
          <Route path="profile" element={<PatientProfile />} />
        </Route>
      </Routes>
    </Router>

  );
}

export default App;
