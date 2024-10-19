import React from "react";
import WidgetWrappe from "../../components/WidgetWrapper";
import { Box, useTheme } from "@mui/system";
import VideoForm from "../../components/VideoForm";

const Home = () => {

  return (
    <>
      <WidgetWrappe height={"90vh"}>
        <Box >
          <Box>
            <VideoForm />
          </Box>
        </Box>
      </WidgetWrappe>
    </>
  );
};

export default Home;
