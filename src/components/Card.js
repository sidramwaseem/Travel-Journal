import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <img src={`../images/${props.image}`}alt="japan-Pic" className="location-img" />
      <div className="card--text-container">
        <div className="card--location">
          <span>
            <img
              className="location-icon"
              src={process.env.PUBLIC_URL + "/images/location.png"}
              alt="Location"
            />
          </span>
          <span className="country-name">{props.location}</span>
          <span>
            <a href={props.googleMapsUrl} className="googleMap-link" target="_blank" rel="noreferrer">View on Google Maps</a>
          </span>
        </div>
        <div>
          <h1 className="location-name">{props.title}</h1>
          <span className="startDate">{props.startDate} -</span>
          <span className="endDate">{props.endDate}</span>
          <p className="locaton-description"> {props.description}</p>
        </div>
      </div>
    </div>
  );
}
