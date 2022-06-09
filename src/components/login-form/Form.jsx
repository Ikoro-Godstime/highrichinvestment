import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

const Form = () => {
  // navigation
  const navigate = useNavigate();

  // login form Ref
  const emailRef = useRef();
  const passwordRef = useRef();

  const loginUser = async (e) => {
    e.preventDefault();
    // check if the input fields are empty
    if (!emailRef.current.value | !passwordRef.current.value) {
      toast("Please fill the form correctly", {
        type: "error",
        position: "bottom-center",
        theme: "colored",
      });
    }
    // sign in user
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
      // store the token in session
      sessionStorage.setItem("token", user.user.refreshToken);
      // redirect to dashboard
      toast.success("Welcome Back !!", {
        position: "top-center",
        theme: "colored",
      });
      navigate("/dashboard");
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        toast("Password is Incorrect", {
          type: "error",
          position: "bottom-center",
          theme: "colored",
        });
      }
      if (error.code === "auth/user-not-found") {
        toast("User Not Found", {
          type: "error",
          position: "bottom-center",
          theme: "colored",
        });
      }
    }
  };

  const resetPassword = async (e) => {
    e.preventDefault();
    try {
      if (!emailRef.current.value) {
        toast("Enter Recovery Mail", {
          type: "error",
          position: "bottom-center",
          theme: "colored",
        });
      } else {
        sendPasswordResetEmail(auth, emailRef.current.value);
        toast.info("Check Your Email for a reset Link", {
          theme: "colored",
          position: "top-center",
        });
      }
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        toast("Enter Recovery Mail", {
          type: "error",
          position: "bottom-center",
          theme: "colored",
        });
      }
    }
  };

  return (
    <Box>
      <Container maxWidth="sm">
        <Paper sx={{ p: 3 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: "80px" }}>
              <Link to="/">
                <img src="/assets/logo-small.png" alt="" />
              </Link>
            </Box>
            <Typography variant="body1" component="p">
              Click here to{" "}
              <Link to="/register" className="text-primary">
                Create Account
              </Link>
            </Typography>
          </Box>
          <Box>
            <TextField
              type="email"
              label="Email"
              variant="filled"
              margin="normal"
              fullWidth
              inputRef={emailRef}
            />
            <TextField
              type="password"
              label="Password"
              variant="filled"
              margin="normal"
              fullWidth
              inputRef={passwordRef}
            />

            <Button variant="text" onClick={resetPassword} color="error">
              Forgot Password
            </Button>
            <Button
              onClick={loginUser}
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 1, mb: 2 }}
            >
              Login
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Form;
