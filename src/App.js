// import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
// import Footer from "./components/HomeHero/Footer";
// import Home from './pages/Home.jsx';
// import Blog from './pages/Blog.jsx';

// function App() {
//   return (
//     <Router>
//       {/* <Header /> */}
//       <Routes>
//         <Route path='/' element={<Blog/>} />
//         <Route path='/' element={<Home/>} />

//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;

//-------------- yhi to chahiye ( final from my side )----------------

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
// import TabLinks from './components/TabLinks/TabLinks.jsx';
import Blog from "./pages/Blog";
import GalleryPage from "./pages/GalleryPage";
import SponserPage from "./pages/SponsorPage";
import EventPage from "./pages/eventpage";
import TeamPage from "./pages/TeamPage";
import WorkshopPage from "./pages/WorkshopPage";

const App = () => {
  return (
    <div className="app">
      {/* <Home /> */}
      {/* <TabLinks /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<TabLinks />} /> */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/sponser" element={<SponserPage />} />
        <Route path="/event" element={<EventPage />} />
        <Route path="/TeamPage" element={<TeamPage />} />
        <Route path="/workshops" element={<WorkshopPage />} />
      </Routes>
    </div>
  );
};

export default App;
