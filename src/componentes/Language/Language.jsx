import React from "react";
import { Stack, FormControl, MenuItem, Select} from "@mui/material/";
import { changeLanguage } from "i18next";
import banderaArgentina from "./arg.png";
import banderaEeuu from "./eeuu.png";

export default function Language() {


  return (
    <Stack>
        <FormControl fullWidth size="small" >
        <Select defaultValue={"es"} onFocusColor="action.active" >
          <MenuItem value={"es"} onHoverColor="action.hover" onClick={() => changeLanguage("es")}><img src={banderaArgentina} alt="" /></MenuItem>
          <MenuItem value={"en"} onClick={() => changeLanguage("en")}><img src={banderaEeuu} alt="" /></MenuItem>
        </Select>
      </FormControl>
    </Stack>
    
  );
}

