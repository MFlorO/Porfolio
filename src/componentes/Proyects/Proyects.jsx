import React from "react";
import ProyectsCard from "./ProyectsCard/ProyectsCard.jsx";
import useHookProyects from "./Hook/useHookProyects.jsx";
import Pagination from "./Pagination/Pagination.jsx";

//MUI
import { Stack, Typography } from "@mui/material/";

//Translation
import { useTranslation } from "react-i18next";




function Proyects() {
  const { t } = useTranslation();

	const [proyectsSlice, currentPage , setCurrentPage, itemsPerPage, copia] = useHookProyects()

  return (
    <Stack
    direction="column"
    justifyContent="center"
    alignItems="center"
    backgroundColor="background.dark"
    sx={{ width: "100%", height:{xs: "120vh", sm: "110vh", md: "100vh", lg: "100vh", xl: "100vh" }}}
  >
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ width: "90%", height: { xs: "50rem", sm: "40rem", md: "40rem", lg: "45rem" }, marginTop: { xs: "7rem", xl: "3rem" }}}
    >


      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ width: { xs: "30%", sm: "150vh", md: "100vh", lg: "100vh", xl: "30%" }, marginBottom: { xs: "3rem", xl: "2rem" } }}
      >  
        <Typography variant="h1" sx={{fontSize:{xs: "3.5rem", xl: "5rem"}, color:"text.secondary"}} >{t("proyects.titleOne")}</Typography>
        <Typography variant="h1" sx={{fontSize:{xs: "3.5rem", xl: "5rem"}}} color="secondary.dark">{t("proyects.titletwo")}</Typography>
    
          
      </Stack>

      {/* <Stack> */}
        <Pagination copia={copia} currentPage={currentPage} setCurrentPage={setCurrentPage} itemsPerPage={itemsPerPage}/>
      {/* </Stack> */}

      <Stack
        direction="row"
        justifyContent="center"
        alignContent="center"
        color="info.dark"
        sx={{
          flexDirection:{ xs: "column", sm: "row", md: "row", lg: "row", xl: "row", xxl: "row" }, justifyContent: {xs:"space-around", xl:"center" },
          width: { xs: "100%", sm: "100%", md: "100%",lg: "100%", xl: "100%" }, height:{xs: "90%", xl: "70%" }, gap:{xs: "0rem",xl: "5rem"}
        }}
      >
              {proyectsSlice().map((p) => {
                return(
                <div key={p.id}>
                <ProyectsCard p={p} />
                </div>
              )})}

      </Stack>
    </Stack>

  </Stack>  

  );
}

export default Proyects;
