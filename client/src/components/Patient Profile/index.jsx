import { Box } from "@mui/material"

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
        </Box>
    )
}