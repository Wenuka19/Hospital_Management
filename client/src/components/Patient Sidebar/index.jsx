import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Folder from "@mui/icons-material/Folder";
import MonitorHeart from "@mui/icons-material/MonitorHeart";
import Person from "@mui/icons-material/Person";
import CalendarMonth from "@mui/icons-material/CalendarMonth";

export function PatientSideBar() {
  return (
    <Box sx={{ height: "100%", bgcolor: "#D5E3E5" }}>
      <List>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <Folder />
            </ListItemIcon>
            <ListItemText primary="Health Record" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <MonitorHeart />
            </ListItemIcon>
            <ListItemText primary="Reports" />
          </ListItemButton>
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
          <ListItemButton>
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}
