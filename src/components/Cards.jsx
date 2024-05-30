import {
  FaLocationDot,
  FaWind,
  FaTemperatureHalf,
  FaDroplet,
  FaCloud,
} from "react-icons/fa6";
const Cards = (props) => {
  let data = props.res;
  function toCelcius(temp) {
    let res = Math.trunc((temp - 32) * (5 / 9));
    return res;
  }
  return (
    <>
      <div
        className="card text-center border-primary opacity-78"
        style={{ width: "18rem" }}
      >
        <div className="card-header">Today</div>

        <div className="card-body">
          <h5 className="card-title">
            <FaLocationDot />
            {data.location.city}, {data.location.country}
          </h5>
          <h4 className="card-text display-6 text-info">
            <FaTemperatureHalf />
            {toCelcius(data.current_observation.condition.temperature)}°C
          </h4>
          <p className="card-text">
            {/* Outlook : Sunny */}
            Outlook: {data.current_observation.condition.text}
          </p>
          <p className="card-text">
            <FaWind />
            {data.current_observation.wind.speed
              ? data.current_observation.wind.speed
              : "No data"}{" "}
            Km/h
          </p>
          <p className="card-text">
            {/* Humidity{"/s"} <FaDroplet /> : 30 */}
            Humidity <FaDroplet />:{" "}
            {data.current_observation.atmosphere.humidity
              ? data.current_observation.atmosphere.humidity
              : "No data"}
            %
          </p>
        </div>
      </div>
    </>
  );
};

export default Cards;
