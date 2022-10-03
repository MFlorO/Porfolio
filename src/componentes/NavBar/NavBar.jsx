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
            xs:"100%",
            md: "25%",
            lg: "25%",
            xl: "16%",
            xxl: "16%"
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
            md: "block",
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
              md: "55%",
              lg: "50%"
            },
          marginRight: {
            xs:"0rem",
            sm:"8rem",
            md:"13rem",
            lg:"15rem",
            xl: "18rem",
            xxl: "20rem"
          },
          fontSize:{
            xs:"4rem",
            lg: "2rem"
          },
          fontFamily: "Raleway",
        }}
      >
        <ListItem disablePadding>
          <ListItemButton onClick={landingPage} sx={botonstyled}>
            <ListItemText primary={t("navbar.started")} />
          </ListItemButton>
        </ListItem>

        {/* <ListItem disablePadding>
          <ListItemButton href="#home" sx={botonstyled}>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem> */}

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
