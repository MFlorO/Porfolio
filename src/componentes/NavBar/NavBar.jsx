import React from "react";
import NavBarItems from "./NavBarItems/NavBarItems";
import Language from "../Language/Language";
import Theme from "../Theme/Theme.jsx"

//Translation
import { useTranslation } from "react-i18next";

//MUI
import { Stack, Typography } from "@mui/material/";
import { styleOne, styleThree, styleTwo } from "./styles.NavBar";



export default function NavBar() {
  const { t } = useTranslation();
  
  return (
    <Stack display='flex' direction="row" position="fixed" justifyContent="space-around" alignItems="center" backgroundColor="background.main" gap={6} zIndex={300} sx={styleOne}>
      
      <Stack display='flex' sx={styleTwo}>
        <Typography variant="h1" color="secondary.dark" fontSize="1rem" sx={styleThree}>{t("navbar.welcome")}</Typography>
      </Stack>

      <NavBarItems />

      <Stack display='flex' direction="row" alignItems="center">
        <Language />
        <Theme />
      </Stack>

    </Stack>
  );
}
