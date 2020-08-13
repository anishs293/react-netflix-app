import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards';
import "./index.css";
import Sdata from './Sdata';


  ReactDOM.render(
  <>
  <h1 className="headline-style">Netflix Favourite Series 🎥</h1>
  {Sdata.map((val) => {
   return(
  <Card 
  imgsrc={val.sname}
  info={val.info}
  title={val.title}
  link={val.link}    
  />
   );
  })}
  </>
  ,document.getElementById("root"));

