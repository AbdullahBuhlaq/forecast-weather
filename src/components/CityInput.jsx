import { useState } from "react";

function CityInput(props) {
  return (
    <div className="city-input col-5">
      <div className="row">
        <input
          type={"text"}
          value={props.city}
          className={"form-control col col-sm col-md col-lg "}
          id={"city"}
          onChange={(event) => {
            props.changeCityHandler(event);
          }}
        />

        <button
          type="submit"
          className="btn btn-primary col-3 col-sm-2 col-md-2 col-lg-2 city-button "
          onClick={() => {
            props.clickHandler();
          }}
        >
          <i
            className="fa-solid fa-magnifying-glass"
            style={{ color: "white", opacity: "1" }}
          ></i>
        </button>
      </div>
    </div>
  );
}

export default CityInput;
