import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards';
import "./index.css";
import Sdata from './Sdata';

  ReactDOM.render(
  <>
  <h1 className="headline-style">Netflix Favourite Series 🎥</h1>
  <Card 
  imgsrc={Sdata[0].sname}
  info={Sdata[0].info}
  title={Sdata[0].title}
  link={Sdata[0].link}    
  />
  <Card 
  imgsrc={Sdata[1].sname}
  info={Sdata[1].info}
  title={Sdata[1].title}
  link={Sdata[1].link}       
 
  />
   <Card 
   imgsrc={Sdata[2].sname}
  info={Sdata[2].info}
  title={Sdata[2].title}
  link={Sdata[2].link}    
  />
<Card 
  imgsrc={Sdata[3].sname}
  info={Sdata[3].info}
  title={Sdata[3].title}
  link={Sdata[3].link}   
  />
  <Card 
  imgsrc={Sdata[4].sname}
  info={Sdata[4].info}
  title={Sdata[4].title}
  link={Sdata[4].link}   
  />
  <Card 
  imgsrc={Sdata[5].sname}
  info={Sdata[5].info}
  title={Sdata[5].title}
  link={Sdata[5].link}   
  />
  <Card 
  imgsrc={Sdata[6].sname}
  info={Sdata[6].info}
  title={Sdata[6].title}
  link={Sdata[6].link}   
  />
  <Card 
  imgsrc={Sdata[7].sname}
  info={Sdata[7].info}
  title={Sdata[7].title}
  link={Sdata[7].link}   
  />
  </>
  ,document.getElementById("root"));

