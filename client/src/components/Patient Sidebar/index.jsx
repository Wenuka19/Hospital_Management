import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import Folder from '@mui/icons-material/Folder';
import MonitorHeart from '@mui/icons-material/MonitorHeart';
import Person from '@mui/icons-material/Person';
import CalendarMonth from '@mui/icons-material/CalendarMonth';
import MedicalServices from '@mui/icons-material/MedicalServices';
import { Link } from "react-router-dom";

export function PatientSideBar(){
    return(
        <Box sx={{height: '100%', width:'300px', bgcolor:'#D5E3E5'}}>
            <List>
                <ListItem> 
                    <ListItem button component={Link} to="healthrecord">
                        <ListItemIcon>
                            <Folder />
                        </ListItemIcon>
                        <ListItemText primary="Health Record" />
                    </ListItem>
                </ListItem>
                <ListItem> 
                    <ListItem button component={Link} to="pres">
                        <ListItemIcon>
                            <MedicalServices />
                        </ListItemIcon>
                        <ListItemText primary="Prescriptions" />
                    </ListItem>
                </ListItem>
                <ListItem> 
                    <ListItem button component={Link} to="reports">
                        <ListItemIcon>
                            <MonitorHeart />
                        </ListItemIcon>
                        <ListItemText primary="Reports" />
                    </ListItem>
                </ListItem>
                <ListItem> 
                    <ListItemButton>
                        <ListItemIcon>
                            <CalendarMonth />
                        </ListItemIcon>
                        <ListItemText primary="Schedule" />
                    </ListItemButton>
                </ListItem>
                <ListItem> 
                    <ListItem button component={Link} to="profile">
                        <ListItemIcon>
                            <Person />
                        </ListItemIcon>
                        <ListItemText primary="Profile" />
                    </ListItem>
                </ListItem>
            </List>
        </Box>
    )
}