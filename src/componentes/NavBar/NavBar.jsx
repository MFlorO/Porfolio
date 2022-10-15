import React from "react";
import { useNavigate } from "react-router";

//Translation
import { useTranslation } from "react-i18next";

//MUI
import { Stack, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material/";
import { styleOne, styleThree, styleTwo, styleFour } from "./styles.NavBar";


const botonstyled = {
  textAlign: "center",
  color: "text.secondary",
  "&:hover": { backgroundColor: "transparent", color: "secondary.dark" },
};



export default function NavBar() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const landingPage = () => navigate("/");


  const menuItems = ( href, nombre) => {
      return (
        <ListItem disablePadding>
        <ListItemButton href={href} sx={botonstyled}>
          {nombre === "Skills" ? ( <ListItemText primary={nombre} />) : ( <ListItemText primary={t(`navbar.${nombre}`)} /> )}
        </ListItemButton>
        </ListItem>
        )
  }

  return (
    <Stack direction="row" position="fixed" justifyContent="space-around" alignItems="center" backgroundColor="background.main" zIndex={300} sx={styleOne}>
      
      <Stack sx={styleTwo}>
        <Typography variant="h1" color="secondary.dark" fontSize="1rem" sx={styleThree}>{t("navbar.welcome")}</Typography>
      </Stack>

      <Stack direction="row" alignItems="center" sx={styleFour} >
        <ListItem disablePadding>
          <ListItemButton onClick={landingPage} sx={botonstyled}>
            <ListItemText primary={t("navbar.started")} />
          </ListItemButton>
        </ListItem>
        
        {menuItems("#about", "about" )}

        {menuItems("#skills", "Skills" )}
       
        {menuItems("#proyects", "proyects" )}

        {menuItems("#contact", "contact" )}

      </Stack>
    </Stack>
  );
}
