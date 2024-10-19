import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  CardMedia,
  Dialog,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../navbar/Navbar"; // Adjust path if necessary
import WidgetWrapper from "../../components/WidgetWrapper"; // Adjust path if necessary
import HomeIcon from "@mui/icons-material/Home";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import { useTheme } from "@mui/system";
import Divider from "../widgets/Divider";

const AlbumDetails = () => {
  const { albumId } = useParams(); // Get album ID from URL
  const [album, setAlbum] = useState(null);
  const [open, setOpen] = useState(false); // State for modal open/close
  const [selectedImage, setSelectedImage] = useState(""); // State for selected image
  const navigate = useNavigate();
  const theme = useTheme();
  const { palette } = theme;

  useEffect(() => {
    const fetchAlbumDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/albums/${albumId}`
        ); // Fetch album by ID
        setAlbum(response.data);
      } catch (error) {
        console.error("Error fetching album details", error);
      }
    };
    fetchAlbumDetails();
  }, [albumId]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (!album) {
    return <Typography>Loading...</Typography>; // Display loading text while fetching
  }

  return (
    <>
      {/* Navbar */}
      <Box className="fixed-navbar">
        <Navbar />
      </Box>

      {/* Sidebar */}
      <WidgetWrapper
        variant="permanent"
        sx={{
          height: "100vh", // Set height to 100vh for full-page height
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            backgroundColor: theme.palette.background.default,
            color: "hashtag#fff",
          },
          position: "fixed", // Keep the sidebar fixed
          top: 0,
        }}
      >
        {/* Sidebar content */}
        <Box
          mb={3}
          display="flex"
          alignItems="center"
          gap={1}
          fontWeight="bold"
          marginTop="10px"
        >
          <img src={"/path/to/logo.png"} alt="Logo" style={{ height: 25 }} />
          <Typography variant="h6">AlumniTube</Typography>
        </Box>
        <Divider />
        <List>
          <ListItem button onClick={() => navigate("/VideoHome")}>
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
          <ListItem button onClick={() => navigate("/image-page")}>
            <ListItemIcon sx={{ color: palette.text.primary }}>
              <PhotoLibraryIcon />
            </ListItemIcon>
            <ListItemText primary="Images" />
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

      {/* Main Content */}
      <Box p={3} sx={{ marginLeft: "240px", marginTop: "80px" }}>
        <Typography variant="h4" mb={3}>
          {album.title}
        </Typography>
        <Typography variant="body1" mb={2}>
          {album.description}
        </Typography>
        <Grid container spacing={2}>
          {album.images.map((image, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <CardMedia
                component="img"
                image={`http://localhost:3001/assets/${image}`} // Display each image
                alt={`Image ${index + 1}`}
                sx={{
                  width: "100%", // Full width for the image
                  height: 200, // Fixed height
                  objectFit: "cover", // Ensure the image fits within the container
                  cursor: "pointer", // Change cursor to pointer on hover
                }}
                onClick={() => handleImageClick(image)} // Click handler
              />
            </Grid>
          ))}
        </Grid>

        {/* Modal for displaying the clicked image */}
        <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
          <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: 2,
            }}
          >
            <img
              src={`http://localhost:3001/assets/${selectedImage}`} // Display selected image
              alt="Selected"
              style={{
                maxWidth: "100%",
                maxHeight: "80vh",
                objectFit: "contain", // Keep aspect ratio
              }}
            />
            <Button
              onClick={handleClose}
              variant="contained"
              color="primary"
              sx={{
                position: "absolute",
                top: 10,
                right: 10,
              }}
            >
              Close
            </Button>
          </Box>
        </Dialog>
      </Box>
    </>
  );
};

export default AlbumDetails;
