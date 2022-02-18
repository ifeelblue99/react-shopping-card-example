import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <img className="card-img" alt="product_image" src={props.data.image} />
      <div className="card-title">
        <h2>{props.data.title.split(" ").slice(0, 4).join(" ")}...</h2>
        <span>COD:{Math.floor(Math.random() * 100 + 1000)}</span>
      </div>
      <div className="card-price">
        <span>£</span>
        <span id="card-price"> {props.data.price}</span>
      </div>
      <div className="card-rating">
        <span>&#9733;{props.data.rating.rate}</span>
        <span> &#8226; {props.data.rating.count} &#8226; comments</span>
      </div>
      <div className="card-description">
        <p>
          &#10095; {props.data.description.split(" ").slice(0, 10).join(" ")}
          <a href="https://github.com/ifeelblue99">Read More</a>
        </p>
      </div>
      <button className="card-btn">ADD TO BASKET</button>
    </div>
  );
}
