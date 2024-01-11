import { weatherIcons, infoIcons, infoUnits } from "../iconsAndUnits";

function TempDetails(props) {
  return (
    <div className="row d-flex jusitfy-content-center align-item-center">
      <div className="col info">
        <div className="row d-flex justify-content-center info-item">
          Morning
        </div>
        <div className="row">
          <div className="col d-flex justify-content-center info-value">
            <div>
              {parseInt(props.temp.morn)}
              {infoUnits[props.unit]["Feels Like"]}
            </div>
          </div>
        </div>
      </div>
      <div className="col info">
        <div className="row d-flex justify-content-center info-item">Day</div>
        <div className="row">
          <div className="col d-flex justify-content-center info-value">
            <div>
              {parseInt(props.temp.day)}
              {infoUnits[props.unit]["Feels Like"]}
            </div>
          </div>
        </div>
      </div>
      <div className="col info">
        <div className="row d-flex justify-content-center info-item">
          Evening
        </div>
        <div className="row">
          <div className="col d-flex justify-content-center info-value">
            <div>
              {parseInt(props.temp.eve)}
              {infoUnits[props.unit]["Feels Like"]}
            </div>
          </div>
        </div>
      </div>
      <div className="col info">
        <div className="row d-flex justify-content-center info-item">Night</div>
        <div className="row">
          <div className="col d-flex justify-content-center info-value">
            <div>
              {parseInt(props.temp.night)}
              {infoUnits[props.unit]["Feels Like"]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TempDetails;
