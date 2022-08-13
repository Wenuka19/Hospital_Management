import { Box } from "@mui/material";
import { BrowserRouter, Outlet } from "react-router-dom";
import { PatientHome } from "../components/Patient Home";
import { PatientSideBar } from "../components/Patient Sidebar";

export default function Patient(){
    return(
        <Box sx={{width: '100%', height:'100vh', display:'flex'}}>
        <PatientSideBar></PatientSideBar>       
        <Outlet />
        </Box>
    )
}