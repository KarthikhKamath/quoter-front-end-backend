import React from "react";
import "./output.css"

function OutputCard(props) {
    const insta = props.instagram;
    const links = `http://instagram.com/${insta}`
  return (
 
    <div className="card">
    <div className="heads">
      <div className=" cd name">{props.name} :</div>
      <div className=" cd email">{props.email}</div>
      </div>
      <div className="cd quote">{props.quote}</div>
      <div className="cd instagram"><a target="_blank" href={links}><button >{props.instagram}</button></a></div>
    </div>

  );
}

export default OutputCard;
