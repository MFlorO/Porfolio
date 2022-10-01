import React from "react";
import { useNavigate } from "react-router";

//Translation
import { useTranslation } from "react-i18next";

//MUI
import {
  Stack,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material/";



export default function NavBar() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const landingPage = () => navigate("/");

  return (
    <Stack
      direction="row"
      position="fixed"
      justifyContent={"space-between"}
      alignItems="center"
      backgroundColor="background.dark"
      sx={{
        width: "100%",
        height: "3.5",
        marginTop: "1rem",
      }}
      zIndex={200}
    >


      <Stack
        sx={{
          width: "20%",
        }}
        marginLeft="1rem"
      >
        <Typography
          variant="h1"
          color="secondary.dark"
          fontSize="1rem"
        >
          {t("navbar.welcome")}
        </Typography>
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        sx={{
          width: "40%",
          marginRight: {
            // xs:"100vh",
            // sm:"150vh",
            // md:"100vh",
            // lg:"100vh",
            xl: "25rem",
          },
          color: "secondary.dark",
          fontFamily: "Raleway",
        }}
      >
        <ListItem disablePadding >
          <ListItemButton onClick={landingPage}   sx={{"&:hover": {backgroundColor: "text.secondary"}, textAlign:"center",}}>
            <ListItemText primary={t("navbar.started")} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton href="#home"  sx={{"&:active": {backgroundColor: "red"},"&:hover": {backgroundColor: "text.secondary"}, textAlign:"center",}} >
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton href="#about" sx={{"&:active": {backgroundColor: "red"},"&:hover": {backgroundColor: "text.secondary"}, textAlign:"center",}}>
            <ListItemText primary={t("navbar.about")} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton href="#skills" sx={{"&:active": {backgroundColor: "red"},"&:hover": {backgroundColor: "text.secondary"}, textAlign:"center",}}>
            <ListItemText primary="Skills" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton href="#proyects" sx={{"&:active": {backgroundColor: "red"},"&:hover": {backgroundColor: "text.secondary"}, textAlign:"center",}}>
            <ListItemText primary={t("navbar.proyects")} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton href="#contact" sx={{"&:active": {backgroundColor: "red"},"&:hover": {backgroundColor: "text.secondary"}, textAlign:"center",}}>
            <ListItemText primary={t("navbar.contact")} />
          </ListItemButton>
        </ListItem>
      </Stack>
    </Stack>
  );
}
