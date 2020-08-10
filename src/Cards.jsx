import React from 'react';

function Card(props){
    return ( 
    <>
    <div className="cards">
     <div className="card">
     <img src={props.imgsrc} alt="series-pic" className="card_img" />
     <div className="card-info">
     <span className="card_category">{props.info}</span>
     <h3 className="card-title">{props.title}</h3>
     <br/>
     <a href={props.link} target="_blank"><button className="circleScaleBtn">Watch Now</button>
     </a>
     </div>
     </div>
     </div>
     </>
     )
 }

export default Card
