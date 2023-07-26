import React, { useState } from "react";
import Header from "../../component/common/header";
import RoboSoccor from "../../component/Robosoccor";
import Pixar from "../../component/Pixar";
import Simulator from "../../component/Simulator";
import MazeUp from "../../component/Maze up";
import BitCoding from "../../component/Bit Coding";

function EventPage() {
  const [activeTab, setActiveTab] = useState("RoboSoccor");
  return (
    <div>
      <Header activeTab={activeTab} setActiveTab={setActiveTab}></Header>
      {getCorrectScreen(activeTab)}
    </div>
  );
}
const getCorrectScreen = (tab_name) => {
  switch (tab_name) {
    case "RoboSoccor":
      return <RoboSoccor></RoboSoccor>;
    case "Pixar":
      return <Pixar></Pixar>;
    case "Simulator":
      return <Simulator></Simulator>;
    case "MazeUp":
      return <MazeUp></MazeUp>;
    case "BitCoding":
      return <BitCoding></BitCoding>;
    default:
      return <RoboSoccor></RoboSoccor>;
  }
};

export default EventPage;
