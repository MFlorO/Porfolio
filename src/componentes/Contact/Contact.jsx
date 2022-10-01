import React, { useRef, useState } from "react";

import emailjs from "@emailjs/browser";

import { useTranslation } from "react-i18next";

import {
  FormHelperText,
  TextField,
  Button,
  Box,
  Alert,
  Stack,
  Typography
} from "@mui/material";

import validate from "./validate.js";





function Contact() {
  const { t } = useTranslation();
  const form = useRef();

  const [value, setValue] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  //         ##################       ESTADO DE LA FUNCION VALIDATE         #################
  const [error, setError] = useState({});

  const [alertSucces, setAlertSucces] = useState(true);
  const [alertError, setAlertError] = useState(true);

  const handleChange = (event) => {
    // setValue(event.target.value);
    setValue({
      ...value,
      [event.target.name]: event.target.value,
    });

    setError(
      validate({
        ...value,
        [event.target.name]: event.target.value,
      })
    );
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7a9uzy5",
        "template_ar9zzxx",
        form.current,
        "l6i2ljgBExD7eyapF"
      )
      .then(
        (result) => {
          console.log(result.text);
          setAlertSucces(false);
          setValue({
            user_name: "",
            user_email: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
          setAlertError(false);
        }
      );
  };

  return (

    <Stack
      direction="column"
      justifyContent={"center"}
      alignItems={"center"}
      backgroundColor="background.dark"
      sx={{
        width: "100%",
        height: {
          xs: "100vh",
          sm: "150vh",
          md: "100vh",
          lg: "100vh",
          xl: "100vh",
        },
      }}
      // backgroundColor="red"
    >
      <Stack
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        marginLeft="1.5rem"
        sx={{
          width: "90%",
          height: {
            xs: "100vh",
            sm: "150vh",
            md: "100vh",
            lg: "100vh",
            xl: "35rem",
          },
          marginTop: {
            xl: "1rem",
          },
        }}
        // backgroundColor="blue"
      >


        <Stack
          direction="column"
          justifyContent="space-around"
          alignItems="center"
          sx={{
            width: {
              xs: "100vh",
              sm: "150vh",
              md: "100vh",
              lg: "100vh",
              xl: "30%",
            },
            height:"6rem",
            marginTop: {
              xl: "2rem",
            },
            fontSize:{
              xs: "100vh",
              sm: "150vh",
              md: "100vh",
              lg: "100vh",
              xl: "5rem",
            }
          }}
          // backgroundColor="green"
        >

          <Stack direction="column" justifyContent="space-around" alignItems="center"
          color="secondary" >
          <Typography variant="h1" color="text.secondary">{t("contact.titleOne")}</Typography>
          <Typography variant="h1" color="secondary.dark">{t("contact.titletwo")}</Typography>
          </Stack>

            
        </Stack>

        <Stack
          direction="column"
          justifyContent={"center"}
          color="info.dark"
          textAlign="justify"
          sx={{
            width: {
              xs: "100vh",
              sm: "150vh",
              md: "100vh",
              lg: "100vh",
              xl: "60%",
            },
            marginTop: {
              xl: "4rem",
            }
          }}
        >
                <Box
        component="form"
        sx={{
          marginLeft: {
            xl: "2em",
          },
          "& .MuiTextField-root": { m: 1, width: "40rem" },
        }}
        noValidate
        autoComplete="off"
        ref={form}
        onSubmit={sendEmail}
        display='flex'
        flexDirection='column'
      >
        <TextField
          id="outlined-multiline-flexible"
          label={t("contact.name")}
          multiline
          rows={1}
          name="user_name"
          value={value.user_name}
          onChange={handleChange}
          color="secondary"
        />
        {error.user_name && (
          <FormHelperText error>{error.user_name}</FormHelperText>
        )}

        <TextField
          id="outlined-multiline-flexible"
          label="Email"
          multiline
          rows={1}
          type="email"
          name="user_email"
          value={value.user_email}
          color="secondary"
          onChange={handleChange}
        />
        {error.user_email && (
          <FormHelperText error>{error.user_email}</FormHelperText>
        )}

        <TextField
          id="outlined-multiline-static"
          label={t("contact.message")}
          type="text"
          name="message"
          multiline
          rows={4}
          value={value.message}
          color="secondary"
          onChange={handleChange}
        />
        {error.message && (
          <FormHelperText error>{error.message}</FormHelperText>
        )}

         <Stack width="40rem"  marginLeft="0.5rem">
          <Button type="submit" value="Send" variant="contained" color="secondary" 
          disabled={
                 JSON.stringify(error) === "{}" && 
                 value.user_name.trim() && value.user_email.trim() && value.message.trim()? false : true
                }>
             {t("contact.contactMe")}
          </Button>
        </Stack>

        {!alertSucces && 
        (<Stack width="40rem"  marginTop="1rem" marginLeft="0.5rem">
          <Alert variant="outlined" severity="success">{t("contact.succes")}</Alert>
        </Stack>
        )}
        
        {!alertError && (
        <Stack width="40rem"  marginTop="1rem" marginLeft="0.5rem">
          <Alert variant="outlined" severity="error" width="40rem">{t("contact.error")}</Alert>
        </Stack>
        )}

      </Box>
    </Stack>

        </Stack>
      </Stack>


  );
}

export default Contact;
