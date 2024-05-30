import { useState, useEffect } from "react";
import Cards from "./Cards.jsx";
const GetWeather = ({ location = "paris" }) => {
  const [weather, setWeather] = useState();

  useEffect(() => {
    const getWeather = async () => {
      const url = `https://yahoo-weather5.p.rapidapi.com/weather?location=${location}&format=json&u=f`;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "a1ca148b57mshf880b088484cb3dp18b476jsn72b65d1f33f6",
          "X-RapidAPI-Host": "yahoo-weather5.p.rapidapi.com",
        },
      };
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setWeather((w) => result);
        console.log(result.location);
      } catch (error) {
        console.error(error);
      }
    };
    getWeather();
  }, [location]);

  return (
    <>
      <Cards res={weather} />
    </>
  );
};

export default GetWeather;
