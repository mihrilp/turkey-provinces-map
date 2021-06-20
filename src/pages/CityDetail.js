import React from "react";
import "./city-detail.css";
import { useLocation } from "react-router-dom";

const CityDetail = () => {
  const { state } = useLocation();
  return (
    <div className="cityDetail">
      <div className="title">
        <p>{state.cityName}</p>
      </div>
      <div className="content">
        <p>
          <span>Bölge:</span> {state.region} Bölgesi
        </p>
        <p>
          <span>Enlem:</span> {state.latitude}
        </p>
        <p>
          <span>Boylam:</span> {state.longitude}
        </p>
        <p>
          <span>Nüfus:</span> {state.population}
        </p>
        <p>
          <span>Yüzölçümü:</span> {state.area} km²
        </p>
        <p>
          <span>Plaka kodu:</span> {state.plateCode}
        </p>
      </div>
      <div className="learnMore">
        <a href={state.url}>Daha fazla bilgi </a>
      </div>
    </div>
  );
};

export default CityDetail;
