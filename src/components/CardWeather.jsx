import { useEffect, useState } from "react";
import CardBody from "./CardBody";
import CardError from "./CardError";
import CardHeader from "./CardHeader";
import init from "../init";

function CardWeather(props) {
  const [city, setCity] = useState("London");
  const [forecast, setForecast] = useState(init);
  const [location, setLocation] = useState({
    latitude: 51.5073,
    longitude: -0.1276,
  });

  useEffect(() => {
    const weatherurl = `https://api.openweathermap.org/data/2.5/onecall?lat=${location.latitude}&lon=${location.longitude}&exclude=minutely,hourly&units=${props.unit}&appid=${import.meta.env.VITE_OPEN_WEATHER_API_KEY}`;

    fetch(weatherurl)
      .then((res) => res.json())
      .then((data) => {
        try {
          setForecast({ ...data });
          document.getElementById("card-error").innerHTML = "";
        } catch (error) {
          document.getElementById("card-error").innerHTML = "Sorry, connection error!";
        }
      })
      .catch((error) => {
        document.getElementById("card-error").innerHTML = "Sorry, can't search for your location!";
      });

    getCity();
  }, [location, props.unit]);

  useEffect(() => {}, [forecast]);

  function getCoords() {
    const coordsurl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${import.meta.env.VITE_OPEN_WEATHER_API_KEY}`;
    fetch(coordsurl)
      .then((res) => res.json())
      .then((data) => {
        try {
          const newCoords = { latitude: data[0].lat, longitude: data[0].lon };
          setLocation(newCoords);
        } catch (error) {
          document.getElementById("card-error").innerHTML = "Sorry, city not found!";
        }
      });
  }

  function getCity() {
    const cityurl = `https://api.openweathermap.org/geo/1.0/reverse?lat=${location.latitude}&lon=${location.longitude}&appid=${import.meta.env.VITE_OPEN_WEATHER_API_KEY}`;
    fetch(cityurl)
      .then((res) => res.json())
      .then((data) => {
        try {
          console.log("the city is", data);
          setCity(data[0].name);
        } catch (error) {
          document.getElementById("card-error").innerHTML = "Sorry, city not found!";
        }
      });
  }

  function changeCityHandler(event) {
    setCity(event.target.value);
  }

  function clickHandler() {
    getCoords(city);
  }

  return (
    <div className="card-weather col">
      <CardHeader city={city} changeCityHandler={changeCityHandler} clickHandler={clickHandler} setCity={setCity} setLocation={setLocation} />
      <CardError />
      <CardBody forecast={forecast} unit={props.unit} />
    </div>
  );
}

export default CardWeather;
