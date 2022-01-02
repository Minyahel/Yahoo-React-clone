import React from "react";


function Card(props) {
  console.log(props.data);
  return (
      <div>
        <img src={props.data.image} style={{width: "300px", height: "200px" }}/>
        <h4>{props.data.category}</h4>
        <h5>{props.data.title}</h5>
        <p>{props.data.subtext}</p>
      </div>
  );
}

export default Card;
