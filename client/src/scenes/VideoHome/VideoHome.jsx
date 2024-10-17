import React from "react";
import Card from "../../components/Card";
import WidgetWrappe from "../../components/WidgetWrapper";
import { Box, useTheme } from "@mui/system";
import Navbar from "../navbar/Navbar";
import Revu from "../Revu/Revu";
import WidgetWrapper from '../../components/WidgetWrapper';
import LamaTube from "../../../public/assets/logo.png";
import Divider from ".././widgets/Divider";
import { List, ListItem, ListItemIcon, ListItemText, Drawer, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const theme = useTheme();
  const { palette } = theme;
  const navigate = useNavigate();

  return (
    <>
      <Box className="fixed-navbar">
        <Navbar />
      </Box>

      <WidgetWrapper
            className="fixed-navbar"
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
                marginTop:"80px",
            }}
        >
            <Box mb={3} display="flex" alignItems="center" gap={1} fontWeight="bold" marginTop="10px">
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
                    <ListItemIcon sx={{ color: palette.text.primary }}>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                    
                </ListItem>
                
                <ListItem button>
                    <ListItemIcon sx={{ color: palette.text.primary }}>
                        <MusicNoteIcon />
                    </ListItemIcon>
                    <ListItemText primary="Music" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon sx={{ color: palette.text.primary }}>
                        <SportsBasketballIcon />
                    </ListItemIcon>
                    <ListItemText primary="Sports" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon sx={{ color: palette.text.primary }}>
                        <SportsEsportsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Gaming" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon sx={{ color: palette.text.primary }}>
                        <LiveTvIcon />
                    </ListItemIcon>
                    <ListItemText primary="Live" />
                </ListItem>
            </List>
        </WidgetWrapper>

      <WidgetWrappe width="1430px" marginTop="80px" marginLeft="300px">
        <Box sx={{ marginTop: "10px" }}>
          <Box>
            <Box 
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
              }}
            >
              {/* Replace Container with Box and apply styles */}
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </Box>
          </Box>
        </Box>
      </WidgetWrappe>
    </>
  );
};

export default Home;
