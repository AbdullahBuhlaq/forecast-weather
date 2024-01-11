import ChoiceMature from "./ChoiceMature";

function MeatureItem(props) {
  const units = {
    Standard: { temperature: "K" },
    Metric: { temperature: "C" },
    Imperial: { temperature: "F" },
  };

  return (
    <div className="accordion" id="accordionExample">
      <div className="choose-header">Choose Measures</div>
      {Object.keys(units).map((item, index) => {
        return (
          <ChoiceMature
            key={index}
            id={index}
            name={item}
            onChecked={props.onChecked}
            unit={props.unit}
          />
        );
      })}
    </div>
  );
}

export default MeatureItem;
