import React, {useState} from 'react'
import data from './data.jsx';
import Workshops from "./WorkshopDetails";
import './workshop.css'

const WorkshopDetail = () => {
    const [ws, setws] = useState(data);
    function showworkshop(id){
      const newWorkshops =ws.filter(tour => tour.id === id);
      setws(newWorkshops);
    }
  
  
    return (
      <div className="App">
        <Workshops ws={ws} showworkshop={showworkshop}/>
      </div>
    );
}

export default WorkshopDetail
