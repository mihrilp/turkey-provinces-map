import "./home.css";
import { useHistory } from "react-router-dom";
import Map from "../components/SvgMap";
import { useState } from "react";
import cities from "../Cities.json";

function Home() {
  const history = useHistory();
  const [cityName, setCityName] = useState("");

  const showDetail = (e) => {
    cities.map((city) => {
      if (city.name === cityName) {
        history.push({
          pathname: `/${cityName}`,
          state: {
            cityName: city.name,
            region: city.region,
            latitude: city.latitude,
            longitude: city.longitude,
            population: city.population,
            area: city.area,
            plateCode: city.id,
          },
        });
      }
    });
  };

  return (
    <div className="Home">
      <header className="header">
        <h2>TÜRKİYE İLLER HARİTASI</h2>
      </header>
      <Map
        onClick={(e) => showDetail(e)}
        onMouseOver={(e) => setCityName(e.target.id)}
      />
    </div>
  );
}

export default Home;
