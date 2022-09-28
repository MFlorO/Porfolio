import React from "react";
import { Link } from "react-router-dom";

//Translation
import { useTranslation } from "react-i18next";

//MUI
import { Stack, ListItem, ListItemButton, ListItemText, Typography  } from "@mui/material/";



export default function NavBar() {
  const { t } = useTranslation();

  return (
    
    <Stack direction="row" bgcolor={"red"} position={"fixed"} marginTop={"3.5rem"} justifyContent={"flex-end"} width={"100%"} alignItems={"center"}>
      <Typography width={"57%"} justifyContent={"flex-start"}>
        FLORENCIA OLDANI
      </Typography>

      <Stack direction="row" justifyContent={"flex-end"} width={"40%"}>
        <ListItem disablePadding><Link to="/"><ListItemButton><ListItemText primary={t("navbar.started")}/></ListItemButton></Link></ListItem>
          
        <ListItem disablePadding><ListItemButton href="#home"><ListItemText primary="Home" /></ListItemButton></ListItem>
        
        <ListItem disablePadding><ListItemButton href="#about"><ListItemText primary={t("navbar.about")} /></ListItemButton></ListItem>
        
        <ListItem disablePadding><ListItemButton href="#skills"><ListItemText primary="Skills" /></ListItemButton></ListItem>
          
        <ListItem disablePadding><ListItemButton href="#proyects"><ListItemText primary={t("navbar.proyects")} /></ListItemButton></ListItem>
        
        <ListItem disablePadding><ListItemButton href="#contact"><ListItemText primary={t("navbar.contact")} /></ListItemButton></ListItem>
        </Stack>
        
    </Stack>
  );
}
