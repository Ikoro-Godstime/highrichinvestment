import React, { useRef } from "react";
import "./form.css";
import { toast } from "react-toastify";
import {
  Box,
  Container,
  Paper,
  TextField,
  Typography,
  Button,
} from "@mui/material";

const Form = () => {
  const nameRef = useRef();

  const emailRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();

  toast.configure();

  const sendMessage = (e) => {
    e.preventDefault();
    // check if the input fields are empty
    if (
      !emailRef.current.value |
      !nameRef.current.value |
      !subjectRef.current.value |
      !messageRef.current.value
    ) {
      return toast("Please fill the form correctly", {
        type: "error",
        position: "bottom-center",
        theme: "colored",
      });
    } else {
      return toast.success("message sent", {
        position: "top-center",
        theme: "colored",
      });
    }
  };

  return (
    <Container maxWidth="xs">
      <Paper sx={{ p: 2 }}>
        <Box>
          <Box>
            <Typography
              variant="h4"
              component="h1"
              gutterBottom
              textAlign="center"
            >
              Let us here your complain
            </Typography>
          </Box>
          <Box>
            <TextField
              type="text"
              label="Full Name"
              inputRef={nameRef}
              margin="normal"
              variant="filled"
              fullWidth
            />
            <TextField
              type="email"
              label="Email"
              inputRef={emailRef}
              margin="normal"
              variant="filled"
              fullWidth
            />
            <TextField
              type="text"
              label="Reason for contacting us"
              inputRef={subjectRef}
              margin="normal"
              variant="filled"
              fullWidth
            />
            <TextField
              type="text"
              label="Message"
              inputRef={messageRef}
              margin="normal"
              variant="filled"
              multiline
              fullWidth
            />
            <Button onClick={sendMessage} variant="contained" fullWidth>
              Send
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default Form;
