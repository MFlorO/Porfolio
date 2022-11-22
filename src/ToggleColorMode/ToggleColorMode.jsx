import React, { useMemo, useState } from "react";
import App from "../App";
import { createTheme, ThemeProvider } from '@mui/material/styles';


//THEME
import getDesignTokens from "./theme.js"
export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });


export default function ToggleColorMode() {

  const [mode, setMode] = useState('dark');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );


  // Update the theme only if the mode changes
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode])


  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
       <App /> 
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}