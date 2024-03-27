import React from 'react';
import { useNavigate } from "react-router";

//Translation
import { useTranslation } from "react-i18next";


import { Stack, ListItem, ListItemButton, ListItemText } from "@mui/material/";
import {styleFour } from "../styles.NavBar";

const botonstyled = {
	textAlign: "center",
	color: "text.secondary",
	width: 'max-content',
	"&:hover": { backgroundColor: "transparent", color: "secondary.dark" },
};


const NavBarItems = () => {

	const { t } = useTranslation();
	const navigate = useNavigate();


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
		<Stack with='max-content' direction="row" alignItems="center" className='holi' sx={styleFour} >
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate("/")} sx={botonstyled}>
            <ListItemText primary={t("navbar.started")} />
          </ListItemButton>
        </ListItem>
        
        {menuItems("#about", "about" )}

        {menuItems("#skills", "Skills" )}
       
        {menuItems("#proyects", "proyects" )}

        {menuItems("#contact", "contact" )}

      </Stack>
	);
};

export default NavBarItems;
