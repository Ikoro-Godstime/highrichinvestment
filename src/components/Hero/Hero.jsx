import React from "react";
import { Link } from "react-router-dom";
import { Typography, Container, Box, Button } from "@mui/material";

const Hero = () => {
  return (
    <>
      <Box>
        <Container
          sx={{
            display: "flex",
            flexDirection: { xs: "column-reverse", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
          }}
          maxWidth="lg"
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
            }}
          >
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: "bold",
                textAlign: { xs: "center", md: "left" },
              }}
              gutterBottom
            >
              Financial Investments
            </Typography>
            <Typography
              variant="body1"
              component="p"
              gutterBottom
              sx={{ textAlign: { xs: "center", md: "left" } }}
            >
              Quickiebooks Trading Signals is a group of financial and
              cryptocurrency experts that invest in mining and cryptocurrency
              trading. We carefully examine the volatility of bitcoin and other
              crypto currencies, invest and make good profit from our
              investments.
            </Typography>
            <Link to="/register">
              <Button variant="outlined" color="primary" size="large">
                Get Started Now !!!
              </Button>
            </Link>
          </Box>
          <Box>
            <img src="/assets/coinbase.jpeg" alt="" />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Hero;
