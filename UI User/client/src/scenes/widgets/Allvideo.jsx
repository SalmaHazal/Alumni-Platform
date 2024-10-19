import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Grid, Box, Typography, Card, CardContent, CardActions } from "@mui/material";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";

const Allvideo = () => {
  const [videos, setVideos] = useState([]);
  const navigate = useNavigate();
  const imageuser = useSelector((state) => state.user.picturePath);
  const userId = useSelector((state) => state.user._id);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get("http://localhost:3001/videos");
        setVideos(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error("Error fetching videos", error);
        setVideos([]);
      }
    };

    fetchVideos();
  }, []);

  // Handle watch video click
  const handleWatchVideo = (video) => {
    navigate("/Videoplayer", { state: { video } });
  };

  return (
    <Box p={3}>
      {videos.length > 0 ? (
        <Grid container spacing={4}>
          {videos.map((video) => (
            <Grid item xs={12} sm={6} md={4} key={video._id}>
              <Card elevation={3}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {video.title}
                  </Typography>

                  <Box
                    component="img"
                    src={`http://localhost:3001/assets/${video.picturePath}`}
                    alt="video thumbnail"
                    sx={{
                      display: "block",
                      maxWidth: "100%",
                      height: "200px",
                      objectFit: "cover", // Ensures aspect ratio is maintained
                    }}
                  />
                </CardContent>

           
                <Button
                  variant="contained" // You can use 'outlined' or 'text' if you want a different style
                  color="primary"
                  onClick={() => handleWatchVideo(video)} // Pass video to Videoplayer
                  style={{ width: "100%" }} // Ensures it takes full width like before
                >
                Watch Video
                </Button>
               
              </Card>

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
                  alt={`user`}
                />

                <Box>
                  <Typography variant="subtitle1" sx={{ fontSize: "16px", fontWeight: 500 }}>
                    {video.provider.firstName} {video.provider.lastName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {video.views} views • {new Date(video.uploadDate).toLocaleDateString()}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="body1" color="text.secondary">
          No services available at the moment.
        </Typography>
      )}
    </Box>
  );
};

export default Allvideo;
