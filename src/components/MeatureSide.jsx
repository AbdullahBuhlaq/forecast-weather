import MeatureItem from "./MeatureItem";

function MeatureSide(props) {
  return (
    <div className="meature-side col-lg-2 col-xl-2 col-xxl-2">
      <MeatureItem onChecked={props.onChecked} unit={props.unit} />
    </div>
  );
}

export default MeatureSide;
