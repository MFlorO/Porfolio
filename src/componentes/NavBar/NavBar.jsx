import React from "react";

//Translation
import { useTranslation } from "react-i18next";

//MUI
import { Stack, Typography } from "@mui/material/";
import { styleOne, styleThree, styleTwo } from "./styles.NavBar";
import NavBarItems from "./NavBarItems/NavBarItems";


export default function NavBar() {
  const { t } = useTranslation();
  
  return (
    <Stack direction="row" position="fixed" justifyContent="space-around" alignItems="center" backgroundColor="background.main" zIndex={300} sx={styleOne}>
      
      <Stack sx={styleTwo}>
        <Typography variant="h1" color="secondary.dark" fontSize="1rem" sx={styleThree}>{t("navbar.welcome")}</Typography>
      </Stack>

      <NavBarItems />

    </Stack>
  );
}
