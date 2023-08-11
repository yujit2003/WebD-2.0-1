import { BrowserRouter } from "react-router-dom";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import {    Navbar, StarsCanvas ,
  // TabLinks, Hero, ,BlogPage,Team,SponsorPage
} from "./components";

import Home from './pages/Home';
import GalleryComp from './pages/GalleryPage';
import TeamComp from './pages/TeamPage';
import Workshop from './pages/WorkshopPage';
import WorkshopDetail from './components/WorkshopPage/WorkshopDetail'
// import Blog from './pages/Blog';
import ContactUs from './components/ContactUs/Contact'


const App = () => {
  return (
    <BrowserRouter>

<Navbar/>
<StarsCanvas /> 

      <Routes>
        <Route path="/Roger28-51-emr/" element={<Home />} />

        <Route path="/Roger28-51-emr/team" element={<TeamComp />} />
        {/* <Route path="/Roger28-51-emr/sponser" element={<SponsorPage />} /> */}
   

        <Route path="/Roger28-51-emr/gallery" element={<GalleryComp/>} />
        <Route path="/Roger28-51-emr/workshop" element={<Workshop/>} />
        <Route path="/Roger28-51-emr/workshop/detail" element={<WorkshopDetail/>} />
      </Routes>

    </BrowserRouter>



  );
}

export default App;

