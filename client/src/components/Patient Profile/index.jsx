import { Box, Typography, Grid} from "@mui/material"


export function PatientProfile(){
    return(
        <Box sx={{width: '100%'}}>
            <Box
                sx={{ bgcolor:'#f6f6f6',
                flexGrow:1,
                m:2,
                p:2,
                borderRadius:3,
                height:'10%'
            }}>
                <h2>Welcome David </h2>
            </Box>
            <Grid container xs={12} justifyContent="center">
                <Grid item xs={6}>
                    <Box 
                    alignSelf = 'center'
                    sx={{ 
                    bgcolor:'#000000',
                    marginTop: 10,
                    borderRadius:3,
                    height:'200pt'
                    }}>            
                    </Box>
                </Grid>
            </Grid>
            
            <Box
                sx={{ bgcolor:'#f6f6f6',
                flexGrow:1,
                m:2,
                p:2,
                borderRadius:3,
                height:'10%'
            }}>
                <Typography  variant="body1"> Name: <br/> Age: </Typography>
            </Box>


        </Box>
    )
}