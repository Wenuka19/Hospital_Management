import { Box, Button, Grid } from "@mui/material";
import { StyledBox } from "../StyledBox";

export function PatientHome(){
    return(
        <Box sx={{width:'100%'}}>
            <Box
                sx={{ bgcolor:'#f6f6f6',
                flexGrow:1,
                m:2,
                p:2,
                borderRadius:3,
                height:'10%'
            }}>
                <h2>Welcome David</h2>
            </Box>
            <Box sx={{ display:'flex', flexDirection: { xs:"column", md:"row"} }}>
                <StyledBox topic='Next Appointment' />
                <StyledBox topic='Medications' />
            </Box>
            <StyledBox topic='Health Record' />
        </Box>
    );
};