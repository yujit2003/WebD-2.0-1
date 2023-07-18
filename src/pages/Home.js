import React from "react";

import HomeHero from "../components/HomeHero/HomeHero.jsx";
import TabLinks from "../components/TabLinks/TabLinks.jsx";
import UpcomingWorkshops from "../components/UpcomingWorkshops/UpcomingWorkshops.jsx";
// import BlogPage from "../components/BlogCard/BlogPage.jsx";

export default function Home() {
  return (
    <div className="h-screen">
      <HomeHero />
      <TabLinks />
      <UpcomingWorkshops />

      {/* <TabLinks /> */}
      {/* <BlogPage /> */}
    </div>
  );
}
