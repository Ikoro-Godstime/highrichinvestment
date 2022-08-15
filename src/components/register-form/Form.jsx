import React, { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { auth, store } from "../../firebase";
import {
  Box,
  Paper,
  TextField,
  Button,
  Container,
  Typography,
  Grid,
  Checkbox,
  FormControl,
  MenuItem,
  Select,
  FormLabel,
} from "@mui/material";
import { MdOutlineFavoriteBorder, MdFavorite } from "react-icons/md";
// import "../../style/form.css";

const Form = () => {
  // navigation router hook
  const navigate = useNavigate();
  // refs for form
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const passwordRef = useRef();
  const countryRef = useRef();
  const [countries, setCountry] = useState([]);
  const [agreed, setAgreed] = useState(false);

  // useEffect to get List of countries
  useEffect(() => {
    const getCountry = async () => {
      try {
        const apiCall = await fetch(
          "https://countriesnow.space/api/v0.1/countries"
        );
        const response = await apiCall.json();
        const countriesAndCities = response.data;

        const countries = countriesAndCities.map((country) => {
          return {
            main: country.country,
          };
        });
        setCountry(countries);
      } catch (error) {
        console.log(error);
      }
    };

    getCountry();
  }, []);

  // function to create and save user to the database
  const saveUser = async (e) => {
    e.preventDefault();
    // check if the input fields are empty
    if (
      !nameRef.current.value |
      !emailRef.current.value |
      !passwordRef.current.value |
      !phoneRef.current.value |
      !agreed
    ) {
      toast("Please fill the form correctly", {
        type: "error",
        position: "bottom-center",
        theme: "colored",
      });
    }
    //create the user in firebase and then save to firestore
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
      // send verification
      sendEmailVerification(user);
      // set the backdrop

      // add to the database
      await setDoc(doc(store, "users", emailRef.current.value), {
        email: user.email,
        name: nameRef.current.value,
        phone: phoneRef.current.value,
        password: passwordRef.current.value,
        country: countryRef.current.value,
        balance: 0,
        profit: 0,
        bonus: 0,
        deposited: 0,
        refBonus: 0,
        totalPackages: 0,
        activePages: 0,
        verified: user.emailVerified,
        createdAt: user.metadata.creationTime,
        uid: user.uid,
      });
      // toast notification
      toast.success(
        "Welcome to High rich investment Please verify your email",
        {
          position: "top-center",
          theme: "colored",
        }
      );
      // redirect user to login
      navigate("/login");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        toast("Email is already in use", {
          type: "error",
          position: "bottom-center",
          theme: "colored",
        });
      }
      if (error.code === "auth/weak-password") {
        toast("Password Should be Greater than six characters", {
          type: "error",
          position: "bottom-center",
          theme: "colored",
        });
      }
      if (error.code === "auth/invalid-email") {
        toast("Invalid Email", {
          type: "error",
          position: "bottom-center",
          theme: "colored",
        });
      }
    }
  };

  console.log(typeof countries);

  return (
    <Box className="form">
      <Box className="form__overlay">
        <Container maxWidth="xs" sx={{ pt: 3, pb: 12 }}>
          <Paper sx={{ p: 2 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box sx={{ width: "100px", mb: 1 }}>
                <Link to="/">
                  <img src="/assets/logo-small.png" alt="" />
                </Link>
              </Box>
              <Typography variant="body1" component="p" textAlign="center">
                If you already have an account with us click here to{" "}
                <Link to="/login">Login</Link>
              </Typography>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Grid container columnSpacing={2} rowSpacing={1}>
                <Grid item xs={12} md={6}>
                  <TextField
                    type="text"
                    variant="filled"
                    label="Full Name"
                    inputRef={nameRef}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    type="email"
                    variant="filled"
                    label="Email"
                    inputRef={emailRef}
                    fullWidth
                  />
                </Grid>
              </Grid>
              <Grid
                container
                columnSpacing={2}
                rowSpacing={1}
                sx={{ mt: { xs: 1 } }}
              >
                <Grid item xs={12} md={6}>
                  <TextField
                    type="password"
                    variant="filled"
                    label="Password"
                    inputRef={passwordRef}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    type="tel"
                    variant="filled"
                    label="Phone Number"
                    inputRef={phoneRef}
                    fullWidth
                  />
                </Grid>
              </Grid>
              <Box sx={{ my: 2 }}>
                <FormControl fullWidth variant="filled">
                  <FormLabel>Select Country</FormLabel>
                  <Select inputRef={countryRef}>
                    {countries.map((country, index) => (
                      <MenuItem value={country.main} key={index}>
                        {country.main}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mt: 2, mb: 2 }}>
                <Checkbox
                  icon={<MdOutlineFavoriteBorder />}
                  checkedIcon={<MdFavorite />}
                  value={agreed}
                  onClick={() => setAgreed(!agreed)}
                />
                <Typography>
                  I have agreed with the terms & conditions
                </Typography>
              </Box>
              <Button
                variant="contained"
                color="primary"
                disableElevation
                fullWidth
                onClick={saveUser}
              >
                Register
              </Button>
            </Box>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default Form;
