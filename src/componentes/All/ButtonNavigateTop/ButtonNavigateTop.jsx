import React from "react";
import { Fab, Stack } from "@mui/material";
import {IoMdNavigate} from "react-icons/io"



function ButtonNavigateTop() {

    const scrollToTop = () =>{
        window.scrollTo({
            top: 0,
          });
    }

  return (
    <Stack>
      <Fab color="secondary" onClick={scrollToTop}>
        <IoMdNavigate size={"2rem"}/>
      </Fab>
    </Stack>
  );
}

export default ButtonNavigateTop;
