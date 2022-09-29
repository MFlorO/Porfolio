import React from "react";
import { Stack, FormControl, MenuItem, Select} from "@mui/material/";
import { changeLanguage } from "i18next";
import banderaArgentina from "./arg.png";
import banderaEeuu from "./eeuu.png";

export default function Language() {


  return (
    <Stack>
        <FormControl fullWidth >
        <Select defaultValue={"es"} >
          <MenuItem value={"es"} onClick={() => changeLanguage("es")}><img src={banderaArgentina} alt="" /></MenuItem>
          <MenuItem value={"en"} onClick={() => changeLanguage("en")}><img src={banderaEeuu} alt="" /></MenuItem>
        </Select>
      </FormControl>
    </Stack>
    
  );
}

