import CardWeather from "./CardWeather";

function WeatherSide(props) {
  return (
    <div className="weather-side col-md-12 col-lg-10 col-xl-10 col-xxl-10 d-flex align-items-start justify-content-center">
      <CardWeather unit={props.unit} />
    </div>
  );
}

export default WeatherSide;
