import { Box } from "@mui/material";

export const StyledBox = (props) => (
    <Box 
        sx={{
            bgcolor:"#f1f1f1",
            flexGrow:1,
            m:2,
            p:2,
            minHeight: '30vh',
            textAlign: "center",
            borderRadius: 3,

            '&:hover': {
                backgroundColor: '#e1e1e1',
              }
        }}
    >
        {props.topic}
    </Box>
);