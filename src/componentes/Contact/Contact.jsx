import React, { useRef, useState } from "react";

import emailjs from "@emailjs/browser";

import { useTranslation } from "react-i18next";

import {
  FormHelperText,
  TextField,
  Button,
  Alert,
  Stack,
  Typography
} from "@mui/material";
import {stylesConteiner, stylesSubConteiner, stylesConteinerItems, stylesContact } from "./styles.contact.js"
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
      .sendForm( "service_7a9uzy5", "template_ar9zzxx", form.current, "l6i2ljgBExD7eyapF" )
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
      sx={ stylesConteiner }
    >
      <Stack
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        sx={ stylesSubConteiner }
      >


        <Stack
          direction="column"
          justifyContent="space-around"
          alignItems="center"
          sx={ stylesConteinerItems }
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
        component="form"
        noValidate
        autoComplete="off"
        ref={form}
        onSubmit={sendEmail}
        display='flex'
        direction="column"
        justifyContent="space-around"
        color="info.dark"
        textAlign="justify"
        sx={ stylesContact }
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
        {error.user_name && <FormHelperText error>{error.user_name}</FormHelperText>}

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
        {error.user_email && <FormHelperText error>{error.user_email}</FormHelperText>}

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
        {error.message && <FormHelperText error>{error.message}</FormHelperText>}

 
        <Button type="submit" value="Send" variant="contained" color="secondary" 
          disabled={
                 JSON.stringify(error) === "{}" && 
                 value.user_name.trim() && value.user_email.trim() && value.message.trim()? false : true
                }>
             {t("contact.contactMe")}
        </Button>


        {!alertSucces && <Alert variant="outlined" severity="success">{t("contact.succes")}</Alert> }
        
        {!alertError && <Alert variant="outlined" severity="error" width="40rem">{t("contact.error")}</Alert> }

      </Stack>


        </Stack>
      </Stack>


  );
}

export default Contact;
