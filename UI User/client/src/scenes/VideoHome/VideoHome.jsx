import React from "react";
import Card from "../../components/Card";
import WidgetWrappe from "../../components/WidgetWrapper";
import { Box, useTheme } from "@mui/system";

const Home = () => {
  const theme = useTheme();
  const { palette } = theme;

  return (
    <>

      <WidgetWrappe>
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
