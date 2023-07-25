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
import Blog from "./components/BlogCard/BlogPage";
import GalleryPage from "./pages/GalleryPage";
import SponserPage from "./components/SponsorPage/SponsorPage"
import Team from "./components/Team/Team"


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
        <Route path="/team" element={<Team/>}/>
      </Routes>
    </div>
  );
};

export default App;
