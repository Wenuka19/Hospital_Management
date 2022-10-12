import {
  Box,
  Button,
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
import MedicalServices from "@mui/icons-material/MedicalServices";
import { Link } from "react-router-dom";
import logo from "../../photos/Logo.svg";

export function PatientSideBar() {
  return (
    <Box sx={{ height: "100%", width: "300px", bgcolor: "#D6E4E6" }}>
      <div style={{ textAlign: "center" }}>
        <Button
          sx={{
            borderRadius: 3,
            "&:hover": { bgcolor: "#a9ced4" },
            marginTop: "15px",
          }}
          component={Link}
          to="/"
        >
          {" "}
          <img
            style={{ height: 150, width: 250, alignContent: "center" }}
            src={logo}
            alt="Error"
          />{" "}
        </Button>
      </div>
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
  );
}
