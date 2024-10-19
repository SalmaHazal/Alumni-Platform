import React from "react";
import { Box, Typography, useTheme,List, ListItem, ListItemIcon, ListItemText, } from "@mui/material";
import { useLocation } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import Navbar from "../navbar/Navbar";
import WidgetWrapper from "../../components/WidgetWrapper";
import { useNavigate } from "react-router-dom";
import LamaTube from "../../../public/assets/logo.png";
import WidgetWrappe from "../../components/WidgetWrapper";
import Divider from "../widgets/Divider";

const Videoplayer = () => {
  const theme = useTheme();
  const { palette } = theme;
  const navigate = useNavigate();
  const location = useLocation();
  const video = location.state?.video; // Access passed video data

  if (!video) {
    return <Typography variant="h6">No video selected</Typography>;
  }

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
            {/* upload video Button ///////////////////////////////////////////////////////// 
            <Box>
              <Button>
                Upload Video
              </Button>
            </Box>*/}
        </WidgetWrapper>

        <WidgetWrappe width="1430px" marginTop="80px" marginLeft="300px">
        <Box sx={{ marginTop: "-40px" }}>
        <Box p={3}>
        <Typography variant="h5" gutterBottom color="primary">
        {video.title}
      </Typography>

      {/* Video player */}
      <video
        controls
        width="100%"
        height="600px"
        src={`http://localhost:3001/assets/${video.videoPath}`} // Adjust this based on actual video path
        style={{ borderRadius: "10px", marginBottom: "20px" }}
      />
      <Box display="flex" alignItems="center" gap={2} mt={2}>
  <Box
    component="img"
    sx={{
      width: "40px",
      height: "40px",
      backgroundColor: "#999",
      borderRadius: "50%",
      objectFit: "cover",
    }}
    src={`http://localhost:3001/assets/logoalumni.png`}
    alt="user"
  />

  <Box>
    <Typography variant="subtitle1" gutterBottom>
      {video.provider.firstName} {video.provider.lastName}
    </Typography>
    <Typography variant="body2" color="text.secondary">
      {video.views} views • {new Date(video.uploadDate).toLocaleDateString()}
    </Typography>
  </Box>
  </Box>

    </Box>
        </Box>
      </WidgetWrappe>
    
    </>
  );
};

export default Videoplayer;
