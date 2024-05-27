import { useState } from "react";
import Cards from "./Cards";
const LocationInput = () => {
  const [location, setLocation] = useState("");
  const getWeather = (e) => {
    setLocation(e.target.value);
    // <Cards location={location} />;
  };
  return (
    <div className="row justify-content-center mt-3 mb-5">
      <div className="col-auto">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search City"
            value={location}
            onChange={getWeather}
          />
          <button
            className="btn btn-success"
            type="button"
            onClick={getWeather}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationInput;
