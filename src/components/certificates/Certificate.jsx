import React from "react";
import { Box, Container, Typography } from "@mui/material";
import certificate from "../../img/cert2.JPG";

const Certificate = () => {
  return (
    <Container sx={{ my: 4 }}>
      <Box>
        <Typography variant="h6" color="GrayText" gutterBottom>
          Licences certificate
        </Typography>
        <Typography variant="h4" color="primary" sx={{ fontWeight: "bold" }}>
          Bank Level Security
        </Typography>
      </Box>
      <Box>
        <Typography variant="h6" color="GrayText" gutterBottom>
          Company Number
        </Typography>
        <Typography variant="h4" color="primary" sx={{ fontWeight: "bold" }}>
          7646643562
        </Typography>
      </Box>
      <Box sx={{ mt: 6, width: "70%", mx: "auto" }}>
        <img src={certificate} alt="company certificate" />
      </Box>
    </Container>
  );
};

export default Certificate;
