import { useState, useEffect } from "react";
import Cards from "./Cards";
import GetWeather from "./GetWeather";
const LocationInput = () => {
  const [location, setLocation] = useState("Nairobi");
  const getLocation = (e) => {
    e.preventDefault();
    let loc = document.getElementById("locationInput").value;
    setLocation((l) => loc);
  };

  return (
    <div className="row justify-content-center mt-3 mb-5">
      <div className="col-auto">
        <form action="" method="POST">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search City"
              defaultValue={location}
              id="locationInput"
              // onChange={getLocation}
            />
            <button
              className="btn btn-success"
              type="button"
              onClick={getLocation}
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="row justify-content-center">
        <GetWeather location={location} />
      </div>
    </div>
  );
};

export default LocationInput;
