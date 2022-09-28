import React from "react";

//Translation
import { useTranslation } from "react-i18next";

//MUI-CSS-ICONS
import { Stack } from "@mui/material/";
import styles from "./Home.module.css";
import {SiGmail, SiGithub} from "react-icons/si"




function Home() {
  const { t } = useTranslation();


  return (
    <Stack height={"100vh"} bgcolor={"gray"} marginTop={"3rem"} >

      {t("home.greeting")}  

      
        <Stack className={styles.wrapper}>
          <div className={styles.icon}>
             <div className={styles.tooltip}>floroldani@hotmail.com</div>
             <span className={styles.span}><SiGmail className="gmail" size="2rem"/></span>
          </div>

          <div className={styles.icon}>
             <div className={styles.tooltip}>/MFlorO</div>
             <span className={styles.span}><SiGithub className="github" size="2rem"/></span>
          </div>
        </Stack>

    </Stack>
  );
}

export default Home;
