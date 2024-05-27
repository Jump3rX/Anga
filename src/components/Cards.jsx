const Cards = ({ location = "Nairobi" }) => {
  return (
    <>
      <div className="row justify-content-center">
        <div
          className="card text-center border-primary opacity-78"
          style={{ width: "18rem" }}
        >
          <div className="card-header">Today</div>

          <div className="card-body">
            <h5 className="card-title">{location}</h5>
            <h4 className="card-text display-6 text-info">26°C</h4>
            <p className="card-text">Sunny</p>
            <p className="card-text">Wind 6Km/h</p>
            <p className="card-text">10% Humidity</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
