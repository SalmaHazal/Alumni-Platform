import React from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText, Drawer, Typography, useTheme } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import LamaTube from "../../../public/assets/logo.png"
import Navbar from '../navbar/Navbar';
import WidgetWrapper from '../../components/WidgetWrapper';
import Divider from ".././widgets/Divider";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";



const Revu = ({ darkMode, setDarkMode }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  
  return (
    <>
    <Box className="fixed-navbar">
      <Navbar />
    </Box>
    <WidgetWrapper
            variant="permanent"
            sx={{
                height: "900px",
                width: 240,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: 240,
                    backgroundColor: theme.palette.background.default,
                    color: '#fff',
                    
                },
                marginTop:"70px",
            }}
        >
            <Box mb={3} display="flex" alignItems="center" gap={1} fontWeight="bold">
             <img src={LamaTube} alt="LamaTube" style={{ height: 25 }} />
             <Typography variant="h6">AlumniTube</Typography>
            </Box>
            <Divider />
            <List>
                <ListItem button 
                onClick={() => {
                   navigate('/VideoHome');
                }}
                >
                    <ListItemIcon sx={{ color: '#fff' }}>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                    
                </ListItem>
                
                <ListItem button>
                    <ListItemIcon sx={{ color: '#fff' }}>
                        <MusicNoteIcon />
                    </ListItemIcon>
                    <ListItemText primary="Music" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon sx={{ color: '#fff' }}>
                        <SportsBasketballIcon />
                    </ListItemIcon>
                    <ListItemText primary="Sports" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon sx={{ color: '#fff' }}>
                        <SportsEsportsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Gaming" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon sx={{ color: '#fff' }}>
                        <LiveTvIcon />
                    </ListItemIcon>
                    <ListItemText primary="Live" />
                </ListItem>
            </List>
        </WidgetWrapper>
        </>
  );
};

export default Revu;
///
