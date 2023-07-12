
import React from "react";

import HomeHero from "../components/HomeHero/HomeHero.jsx";
import TabLinks from "../components/TabLinks/TabLinks.jsx";
// import BlogPage from "../components/BlogCard/BlogPage.jsx";

export default function Home() {
    return (
        <div className="h-screen">
            <HomeHero />
            <TabLinks />
            
            {/* <TabLinks /> */}
            {/* <BlogPage /> */}
          
        </div>
    )
}

