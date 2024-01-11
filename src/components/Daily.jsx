import { useEffect, useState } from "react";
import TempDetails from "./TempDetails";
import { weatherIcons, infoIcons, infoUnits } from "../iconsAndUnits";

function Daily(props) {
  const day = ["Sun.", "Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat."];

  const [info, setInfo] = useState({
    Clouds: 100,
    Humidity: 71,
    Precipitation: 0.63,
    Pressure: 1016,
    UVI: 0,
    Wind: 3.09,
    Wind_Gust: 10.06,
    Wind_Deg: 200,
  });

  useEffect(() => {
    let newInfo = {
      Clouds: props.forecast.clouds,
      Humidity: props.forecast.humidity,
      Precipitation: props.forecast.pop,
      Pressure: props.forecast.pressure,
      UVI: props.forecast.uvi,
      Wind: props.forecast.wind_speed,
      Wind_Gust: props.forecast.wind_gust,
      Wind_Deg: props.forecast.wind_deg,
    };

    setInfo({ ...info, ...newInfo });
  }, [props.forecast]);

  let id = "";
  id = id == props.goup ? "goup" : id;
  id = id == props.godown ? "godown" : id;

  return (
    <div className={"col daily " + "daily-th" + props.id} id={id}>
      <div className="row daily-1">
        <div className="col bord-right">
          <div className="row ">
            <div className="col daily-date">
              <div className="row d-flex justify-content-center daily-date-top">
                {new Date(props.forecast.dt * 1000).getDate() +
                  "/" +
                  (new Date(props.forecast.dt * 1000).getMonth() + 1)}
              </div>
              <div className="row d-flex justify-content-center daily-date-bottom">
                {day[new Date(props.forecast.dt * 1000).getDay()]}
              </div>
            </div>
          </div>
          <div className="row temp-current">
            <div className="col-6 d-flex justify-content-end">
              {
                <i
                  className={
                    "weather-icon fa-solid " +
                    weatherIcons[props.forecast.weather[0].icon]
                  }
                >
                  {weatherIcons[props.forecast.weather[0].icon] ===
                  "fa-cloud black-cloud" ? (
                    <i className={"weather-icon fa-solid fa-cloud above"}></i>
                  ) : null}
                </i>
              }
            </div>
            <div className="col-4 max-min">
              <div className="row">
                <div className="col daily-temp">
                  {parseInt(props.forecast.temp.max)}
                  {infoUnits[props.unit]["Feels Like"]}
                </div>
              </div>
              <div className="row">
                <div className="col daily-temp">
                  {parseInt(props.forecast.temp.min)}
                  {infoUnits[props.unit]["Feels Like"]}
                </div>
              </div>
            </div>
          </div>
          <div className="row main-current">
            <div className="col">
              <div className="row d-flex justify-content-center current-main">
                {props.forecast.weather[0].main}
              </div>
              <div className="row d-flex justify-content-center current-description">
                {props.forecast.weather[0].description}
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="row d-flex jusitfy-content-center align-item-center">
            {Object.keys(info).map((item, index) => {
              return (
                <div
                  className="col-4 col-sm-4 col-md-4 col-lg-4 info"
                  key={index}
                >
                  <div className="row d-flex justify-content-center">
                    <div className="d-flex justify-content-center">
                      <i className={"fa-solid " + infoIcons[item]}></i>
                    </div>
                    <div className="d-flex justify-content-center info-item">
                      {item}
                    </div>
                  </div>
                  <div className="row d-flex justify-content-center info-value">
                    {info[item]}
                    {infoUnits[props.unit][item]}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="row daily-2">
        <div className="col info bord-right bord-bottom">
          <div className="row d-flex justify-content-center">
            <div className="d-flex justify-content-center">
              <i className={"fa-solid fa-temperature-high"}></i>
            </div>
            <div className="d-flex justify-content-center info-item">
              Temperature
            </div>
          </div>
        </div>
        <div className="col info bord-bottom">
          <div className="row d-flex justify-content-center">
            <div className="d-flex justify-content-center">
              <i className={"fa-solid fa-temperature-three-quarters"}></i>
            </div>
            <div className="d-flex justify-content-center info-item">
              Feels Like
            </div>
          </div>
        </div>
      </div>
      <div className="row daily-3">
        <div className="col bord-right">
          <TempDetails temp={props.forecast.temp} unit={props.unit} />
        </div>
        <div className="col">
          <TempDetails temp={props.forecast.feels_like} unit={props.unit} />
        </div>
      </div>
    </div>
  );
}

export default Daily;
