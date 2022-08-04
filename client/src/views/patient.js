import { Box } from "@mui/material";
import { PatientHome } from "../components/Patient Home";
import { PatientSideBar } from "../components/Patient Sidebar";

export default function Patient(){
    return(
        <Box sx={{width: '100%', height:'100%', display:'flex'}}>
        <PatientSideBar></PatientSideBar>
        <PatientHome></PatientHome>
        </Box>
    )
}