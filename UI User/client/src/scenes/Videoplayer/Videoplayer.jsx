import React from "react";
import {
  Box,
  Typography,
  Avatar,
  Button,
  Divider,
  IconButton,
  useTheme,
} from "@mui/material";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";

import Card from "../../components/Card";
import WidgetWrapper from "../../components/WidgetWrapper";

const Videoplayer = () => {
  const theme = useTheme();
  const { palette } = theme;
  return (
    <>
      <WidgetWrapper>
        <Box display="flex" gap={3}>
          <Box flex={5}>
            <Box>
              <iframe
                width="100%"
                height="600"
                src="https://www.youtube.com/embed/k3Vfj-e1Ma4"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Box>
            <Typography variant="h6" sx={{ marginTop: 2, marginBottom: 1 }}>
              Test Video
            </Typography>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              sx={{ marginBottom: 2 }}
            >
              <Typography variant="body2" color="text.secondary">
                7,948,154 views • Jun 22, 2022
              </Typography>
              <Box display="flex" gap={2}>
                <IconButton>
                  <ThumbUpOutlinedIcon /> 123
                </IconButton>
                <IconButton>
                  <ThumbDownOffAltOutlinedIcon /> Dislike
                </IconButton>
                <IconButton>
                  <ReplyOutlinedIcon /> Share
                </IconButton>
                <IconButton>
                  <AddTaskOutlinedIcon /> Save
                </IconButton>
              </Box>
            </Box>
            <Divider />
            <Box
              display="flex"
              justifyContent="space-between"
              sx={{ marginY: 2 }}
            >
              <Box display="flex" gap={2}>
                <Avatar
                  src="https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo"
                  sx={{ width: 50, height: 50 }}
                />
                <Box>
                  <Typography variant="body1" fontWeight="500">
                    Lama Dev
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    200K subscribers
                  </Typography>
                  <Typography variant="body2" sx={{ marginTop: 1 }}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Doloribus laborum delectus unde quaerat dolore culpa sit
                    aliquam at. Vitae facere ipsum totam ratione exercitationem.
                    Suscipit animi accusantium dolores ipsam ut.
                  </Typography>
                </Box>
              </Box>
              <Button
                variant="contained"
                color="error"
                sx={{ paddingX: 4, alignSelf: "center" }}
              >
                SUBSCRIBE
              </Button>
            </Box>
            <Divider />
            {/* <Comments /> */}
          </Box>
          <Box flex={2}>
            <Box display="flex" flexDirection="column" gap={2}>
              <Card type="sm" />
              <Card type="sm" />
              <Card type="sm" />
              <Card type="sm" />
              <Card type="sm" />
              <Card type="sm" />
              <Card type="sm" />
              <Card type="sm" />
              <Card type="sm" />
            </Box>
          </Box>
        </Box>
      </WidgetWrapper>
    </>
  );
};

export default Videoplayer;
