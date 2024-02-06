import React from "react";

function Cards(props){
    return(
      
  <div className="cards">
    <div className ="card">
      <img src ={props.imgsrc} alt="My_img" className="card__img" />
      <div className="card__info">
        <span className="card__category">{props.sname}</span>
        <h3 className="card__title"> {props.title}</h3>
        // eslint-disable-next-line react/jsx-no-target-blank
        <a href={props.link} target="_blank">
          <button>watch now</button>
        </a>
  
      </div>
  
    </div>
  
  </div>

  
  
    )
  }
  export default Cards;