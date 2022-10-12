import { Box } from "@mui/material";
import { BrowserRouter, Outlet } from "react-router-dom";
import { PatientHome } from "../components/Patient Home";
import { PatientSideBar } from "../components/Patient Sidebar";
import { useTheme } from "@mui/material/styles";

export default function Patient() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        backgroundColor: theme.palette.mainbg,
      }}
    >
      <PatientSideBar></PatientSideBar>
      <Outlet />
    </Box>
  );
}
