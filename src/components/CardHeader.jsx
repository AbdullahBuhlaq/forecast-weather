import CityInput from "./CityInput";
import Clock from "./Clock";
import GetPosition from "./GetPosition";

function CardHeader(props) {
  return (
    <div className="card-header row">
      <CityInput
        city={props.city}
        changeCityHandler={props.changeCityHandler}
        clickHandler={props.clickHandler}
      />
      <GetPosition setCity={props.setCity} setLocation={props.setLocation} />
      <Clock />
    </div>
  );
}

export default CardHeader;
