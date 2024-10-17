import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Avatar } from "@mui/material";

const Card = ({ type }) => {
  return (
    <Link to="/Videoplayer" style={{ textDecoration: "none" }}>
      <Box
        sx={{
          width: type !== "sm" ? 360 : "100%",
          marginBottom: type === "sm" ? "10px" : "45px",
          cursor: "pointer",
          display: type === "sm" ? "flex" : "block",
          gap: "10px",
        }}
      >
        <Box
          component="img"
          sx={{
            width: "100%",
            height: type === "sm" ? "120px" : "202px",
            backgroundColor: "#999",
            flex: 1,
          }}
          src="https://i9.ytimg.com"
          alt="video thumbnail"
        />
        <Box
          sx={{
            display: "flex",
            marginTop: type !== "sm" ? "16px" : 0,
            gap: "12px",
            flex: 1,
          }}
        >
          {type !== "sm" && (
            <Avatar
              sx={{
                width: 36,
                height: 36,
                backgroundColor: "#999",
              }}
              src="https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo"
              alt="channel logo"
            />
          )}
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontSize: "16px",
                fontWeight: 500,
                color: "text.primary", // Dynamic MUI theme color
              }}
            >
              Test Video
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                fontSize: "14px",
                color: "text.secondary", // Dynamic MUI theme color
                margin: "9px 0px",
              }}
            >
              Lama Dev
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: "14px",
                color: "text.secondary", // Dynamic MUI theme color
              }}
            >
              660,908 views • 1 day ago
            </Typography>
          </Box>
        </Box>
      </Box>
    </Link>
  );
};

export default Card;
