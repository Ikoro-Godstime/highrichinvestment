import React from "react";
import { IconContext } from "react-icons";
import { Box, Container, Grid, Typography } from "@mui/material";
import { abouts } from "./abouts";

const About = () => {
  return (
    <React.Fragment>
      <IconContext.Provider value={{ color: "#0e204e", size: "1.8rem" }}>
        <Container sx={{ mt: 3 }}>
          <div className="container d-flex flex-column">
            <Box>
              <Typography
                variant="h4"
                component="h1"
                textAlign="center"
                sx={{ fontWeight: "bold" }}
              >
                Create your cryptocurrency portfolio today
              </Typography>
              <Typography variant="subtitle1" component="p" textAlign="center">
                High rich investment has a variety of features that make it the
                best place to start trading
              </Typography>
            </Box>
            <Box sx={{ mt: 2, mb: 2 }}>
              <Grid container columnSpacing={3} rowSpacing={3}>
                {abouts.map((about) => (
                  <Grid item xs={12} md={6} key={about.id}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Box sx={{ my: 2 }}>{about.icon}</Box>
                      <Box className="text-center">
                        <Typography
                          variant="h5"
                          component="h3"
                          textAlign="center"
                        >
                          {about.title}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          component="p"
                          textAlign="center"
                        >
                          {about.info}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </div>
        </Container>
      </IconContext.Provider>
    </React.Fragment>
  );
};

export default About;
