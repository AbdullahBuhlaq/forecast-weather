import { infoUnits } from "../iconsAndUnits";

function ChoiceMature(props) {
  const seq = ["headingOne", "headingTwo", "headingThree"];
  const col = ["collapseOne", "collapseTwo", "collapseThree"];
  const name = ["standard", "metric", "imperial"];
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={seq[props.id]}>
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={"#" + col[props.id]}
          aria-expanded="true"
          aria-controls={col[props.id]}
        >
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              alt={name[props.id]}
              id={"flexRadioDefault" + props.id}
              onClick={(event) => {
                props.onChecked(event);
              }}
              defaultChecked={props.unit == name[props.id] ? true : false}
            />
            <label
              className="form-check-label"
              htmlFor={"flexRadioDefault" + props.id}
            >
              {props.name}
            </label>
          </div>
        </button>
      </h2>
      <div
        id={col[props.id]}
        className="accordion-collapse collapse"
        aria-labelledby={seq[props.id]}
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          <div className="col">
            {Object.keys(infoUnits[name[props.id]])
              .filter((item) => {
                return item != "UVI" && item != "Wind Deg";
              })
              .map((item, index) => {
                return (
                  <div className="row" key={index}>
                    {item} :
                    {typeof infoUnits[name[props.id]][item] === "object"
                      ? infoUnits[name[props.id]][item].props.children
                      : infoUnits[name[props.id]][item]}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChoiceMature;
