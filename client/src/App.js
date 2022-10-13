import React, { useReducer, useState } from "react";
import HomePage from "./views/homepage";
import Patient from "./views/patient";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PatientHome } from "./components/Patient Home";
import { PatientPrescription } from "./components/Patient Prescription";
import { PatientHealthRecord } from "./components/Patient HealthRecord";
import { PatientReport } from "./components/Patient Report";
import { PatientProfile } from "./components/Patient Profile";
import { CssBaseline } from "@mui/material";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "15px",
        },
      },
    },
  },
  palette: {
    mainbg: "#c5dde3",
  },
});

function App() {
  const [token, setToken] = useState();

  if (!token) {
    return <HomePage setToken={setToken} />;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Patient />}>
            <Route path="" element={<PatientHome />} />
            <Route path="pres" element={<PatientPrescription />} />
            <Route path="healthrecord" element={<PatientHealthRecord />} />
            <Route path="reports" element={<PatientReport />} />
            <Route path="profile" element={<PatientProfile />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
