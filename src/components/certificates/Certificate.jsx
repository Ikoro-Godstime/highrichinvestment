import React from "react";
import { Box, Container, Typography } from "@mui/material";
import certificate from "../../img/cert.jpeg";

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
          ISO 9001:2015
        </Typography>
      </Box>
      <Box sx={{ mt: 6, width: "70%", mx: "auto" }}>
        <img src={certificate} alt="company certificate" />
      </Box>
    </Container>
  );
};

export default Certificate;
