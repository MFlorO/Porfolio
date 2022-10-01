import React from "react";
import { useNavigate } from "react-router";

//Translation
import { useTranslation } from "react-i18next";

//MUI
import {
  Stack,
  Box,
  // List,
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
      alignItems={"center"}
      backgroundColor="background.dark"
      sx={{
        width: "100%",
        height: {
          xs: "100vh",
          sm: "150vh",
          md: "100vh",
          lg: "100vh",
          xl: "3.5rem",
        },
        marginTop: {
          // xs:"100vh",
          // sm:"150vh",
          // md:"100vh",
          // lg:"100vh",
          xl: "0.5rem",
        },
      }}
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
          sx={{
            fontSize: {
              // xs:"100vh",
              // sm:"150vh",
              // md:"100vh",
              // lg:"100vh",
              xl: "1rem",
            },
          }}
        >
          {t("navbar.welcome")}
        </Typography>
      </Stack>

      <Stack
        direction="row"
        alignItems={"center"}
        sx={{
          width: "40%",
          marginRight: {
            // xs:"100vh",
            // sm:"150vh",
            // md:"100vh",
            // lg:"100vh",
            xl: "25rem",
          },
          fontSize: {
            xs: "3rem",
            sm: "4rem",
            md: "5rem",
            lg: "5rem",
            xl: "1rem",
          },
          color: "text.secondary",
        }}
      >
        <ListItem disablePadding>
          <ListItemButton onClick={landingPage}>
            <ListItemText primary={t("navbar.started")} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton href="#home">
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton href="#about">
            <ListItemText primary={t("navbar.about")} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton href="#skills">
            <ListItemText primary="Skills" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton href="#proyects">
            <ListItemText primary={t("navbar.proyects")} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton href="#contact">
            <ListItemText primary={t("navbar.contact")} />
          </ListItemButton>
        </ListItem>
      </Stack>
    </Stack>
  );
}
