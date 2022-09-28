import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./componentes/LandingPage/LandingPage";
import All from "./componentes/All/All";


function App() {
  return (
    <React.Fragment>


      <Routes> {/*Reemplaza el Swich de React-Router-Dom v5. Tampoco se ponen mas los exact*/}

        <Route path="/" element={<LandingPage />} />

        <Route path="/all" element={<All />} />

        {/* <Route path="*" component={Error} /> */}

      </Routes>


    </React.Fragment>
  );
}

export default App;

