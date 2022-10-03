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

import Zoom from 'react-reveal/Zoom';
import ContactLink from "../ContactLink/ContactLink";




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
      justifyContent="center"
      alignItems="center"
      backgroundColor="background.dark"
      sx={{
        width: "100%",
        height: {
          xs: "100vh",
          sm: "100vh",
          md: "100vh",
          lg: "100vh",
          xl: "100vh",
          xxl: "100vh"
        }
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        // backgroundColor="red"
        sx={{
          flexDirection:{
            xs: "column",
            sm: "column",
            md: "row",
            lg: "row",
            xl: "row",
            xxl: "row"
          },
          width: "90%",
          height: {
            xs: "90vh",
            sm: "90vh",
            md: "20rem",
            lg: "20rem",
            xl: "35rem",
            xxl: "35rem",
          },
          marginTop: {
            xs: "0rem",
            sm: "0rem",
            md: "1rem",
            lg: "1rem",
            xl: "1rem",
            xxl: "1rem",
          },
          marginLeft: {
            xs: "0rem",
            sm: "0rem",
            md: "1rem",
            lg: "1.5rem",
            xl: "1.5rem",
            xxl: "1.5rem",
          },
        }}
      >


        <Stack
          direction="column"
          justifyContent="space-around"
          alignItems="center"
          sx={{
            width: {
              xs: "30%",
              sm: "30%",
              md: "30%",
              lg: "30%",
              xl: "30%",
              xxl: "50%"
            },
            height:"6rem",
            marginTop: {
              xs: "4rem",
              sm: "5rem",
              xl: "5rem",
            },
          }}
        >

          <Stack direction="column" justifyContent="space-around" alignItems="center"
          color="secondary" 
          marginBottom="2rem">
          <Typography variant="h1" fontSize={{ xs: "4rem", xl: "5rem" }} color="text.secondary">{t("contact.titleOne")}</Typography>
          <Typography variant="h1"fontSize={{ xs: "4rem", xl: "5rem" }} color="secondary.dark">{t("contact.titletwo")}</Typography>
          </Stack>
          
          <Zoom> 
          <ContactLink />
          </Zoom> 

            
        </Stack>

        <Stack
          direction="column"
          justifyContent="center"
          color="info.dark"
          textAlign="justify"
          sx={{
            width: {
              xs: "100%",
              sm: "100%",
              md: "60%",
              lg: "60%",
              xl: "60%",
              xxl: "50%"
            },
            marginTop: {
              xs: "-5rem",
              sm: "-4rem",
              md: "4rem",
              lg: "4rem",
              xl: "4rem",
              xxl: "4rem",
            }
          }}
        >
        <Box
        component="form"
        sx={{
          marginLeft: {
            sm: "4rem",
            md: "1rem",
            xl: "2em",
          },
          "& .MuiTextField-root": {
            xs: { m: 1, width: "22rem", marginBottom:"0.5rem"},
            sm: { m: 1, width: "30rem", marginBottom:"0.5rem"},
            md: { m: 1, width: "30rem", marginBottom:"0.5rem"},
            lg: { m: 1, width: "40rem", marginBottom:"0.5rem"},
            xl: { m: 1, width: "40rem", marginBottom:"0.5rem"},
            xxl: { m: 1, width: "40rem", marginBottom:"0.5rem"}
          }

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

         <Stack 
           sx={{
             width: {
             xs: "100%",
             sm: "86%",
             md: "94%",
             lg: "94%",
             xl: "81%",
             xxl: "78%"
            }
          }}
         >
          <Button type="submit" value="Send" variant="contained" color="secondary" 
          disabled={
                 JSON.stringify(error) === "{}" && 
                 value.user_name.trim() && value.user_email.trim() && value.message.trim()? false : true
                }>
             {t("contact.contactMe")}
          </Button>
        </Stack>

        {!alertSucces && 
        (<Stack 
          sx={{
            width: {
            xs: "100%",
            sm: "86%",
            md: "94%",
            lg: "94%",
            xl: "81%",
            xxl: "78%"
           },

         }} marginTop="1rem" 
        >
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
