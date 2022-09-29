import React from "react";

//THEME
import { useTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import IconButton from "@mui/material/IconButton";

//MUI-EFECTS
import { Stack } from "@mui/material/";



function Theme({ColorModeContext}) {

  const theme = useTheme();

  const colorMode = React.useContext(ColorModeContext);
 

  return (
    <Stack>
      <IconButton
        sx={{ ml: 1 }}
        onClick={colorMode.toggleColorMode}
        color="inherit"
        position="absolute"
      >
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </Stack>
  );
}

export default Theme;
