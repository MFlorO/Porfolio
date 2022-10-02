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


const botonstyled = {
  textAlign: "center",
  color: "text.secondary",
  "&:hover": { backgroundColor: "transparent", color: "secondary.dark" },
};






export default function NavBar() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const landingPage = () => navigate("/");

  return (
    <Stack
      direction="row"
      position="fixed"
      justifyContent="space-between"
      alignItems="center"
      backgroundColor="background.main"
      zIndex={300}
      sx={{
        width: "100%",
        height: "3.5",
        marginTop:{
          xs:"3rem",
          lg: "1rem"
        }
      }}
    >
      <Stack
        sx={{
          width:{
            xs:"30%",
            lg: "16%"
          },
          marginLeft:{
            xs:"0rem",
            lg: "1rem"
          }
        }}
      >
        <Typography variant="h1" color="secondary.dark" fontSize="1rem"
        sx={{
          display:{
            xs:"none",
            lg: "block"
          }
        }}>{t("navbar.welcome")}
        </Typography>
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        sx={{
          width:{
              xs:"100%",
              lg: "45%"
            },
          marginRight: {
            xs:"15rem",
            // sm:"150vh",
            // md:"100vh",
            // lg:"100vh",
            xl: "25rem",
          },
          fontSize:{
            xs:"10rem",
            lg: "2rem"
          },
          fontFamily: "Raleway",
          // backgroundColor: "red"
        }}
      >
        <ListItem disablePadding>
          <ListItemButton onClick={landingPage} sx={botonstyled}>
            <ListItemText primary={t("navbar.started")} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton href="#home" sx={botonstyled}>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton href="#about" sx={botonstyled}>
            <ListItemText primary={t("navbar.about")} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            href="#skills"
            sx={botonstyled}
          >
            <ListItemText primary="Skills" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            href="#proyects"
            sx={botonstyled}
          >
            <ListItemText primary={t("navbar.proyects")} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            href="#contact"
            sx={botonstyled}
          >
            <ListItemText primary={t("navbar.contact")} />
          </ListItemButton>
        </ListItem>
      </Stack>
    </Stack>
  );
}
