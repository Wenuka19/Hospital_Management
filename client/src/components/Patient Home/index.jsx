import { Box, Button, Grid, Typography } from "@mui/material";
import { StyledBox } from "../StyledBox";
import { useTheme } from "@mui/material";

export function PatientHome(){
    const theme = useTheme();
    return(
        <Box sx={{ paddingInline: 5, paddingTop: 3, width:'100%'}}>
            <Box
                sx={{ bgcolor: "#ffffff",
                flexGrow:1,
                m:2,
                p:2,
                borderRadius:3,
                height:'10%'
            }}>
                <h2>Welcome David</h2>
            </Box>
            <Box sx={{ display:'flex', flexDirection: { xs:"column", md:"row"} }}>
                <StyledBox 
                    topic= { <Typography variant='h6'> Next Appointments </Typography>} 
                    content= { <Typography align='left'>Item 1 <br /> Item 2</Typography>}/>
                <StyledBox 
                    topic = { <Typography variant='h6'> Next Appointments </Typography>} />
            </Box>
            <StyledBox 
                topic='Health Record'
                variant='h6' />
        </Box>
    );
};