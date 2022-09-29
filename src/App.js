import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./componentes/LandingPage/LandingPage";
import All from "./componentes/All/All";




function App({ColorModeContext}) {


  return (

    <React.Fragment>



      <Routes> {/*Reemplaza el Swich de React-Router-Dom v5. Tampoco se ponen mas los exact*/}

        <Route path="/" element={<LandingPage ColorModeContext={ColorModeContext}/>} />
        {/* <Route path="/" element={<Theme  />} /> */}
        <Route path="/all" element={<All ColorModeContext={ColorModeContext}/>} />

        {/* <Route path="*" component={Error} /> */}

      </Routes>


    </React.Fragment>

  );
}

export default App;

