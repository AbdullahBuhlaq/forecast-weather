import { useState } from "react";
import Current from "./Current";
import Daily from "./Daily";

function CardBody(props) {
  const [goup, setGoup] = useState(0);
  const [godown, setGodown] = useState(-1);
  function updateGoup() {
    setGodown(goup);
    setGoup(goup + 1);
  }
  function updateGodown() {
    setGoup(godown);
    setGodown(godown - 1);
  }
  return (
    <div className="card-body">
      <Current forecast={props.forecast} unit={props.unit} />
      <div className="daily-container">
        {props.forecast?.daily?.map((item, index) => {
          return <Daily key={index} id={index} forecast={item} unit={props.unit} goup={goup} godown={godown} />;
        })}
        <button
          className="goup-button btn btn-primary"
          onClick={() => {
            if (goup != 7) {
              let x = document.getElementsByClassName("daily-th" + goup);
              if (x.length) x[0].style.zIndex = 11;
              setTimeout(() => {
                if (x.length) x[0].style.transitionDuration = "1s";
                if (x.length) x[0].style.transformOrigin = "0% 0% 0px";
                let y = (document.getElementsByClassName("daily-container")[0].style.perspective = "3000px");

                if (x.length) x[0].style.transform = "rotate3D(1,0,0,270deg)";
                setTimeout(() => {
                  x[0].style.visibility = "hidden";
                }, 1);
                updateGoup();
              }, 100);
            }
          }}
        >
          Next Day
        </button>
        <div className="d-flex justify-content-center daily-title current-title">Daily Calendar</div>
        <img src="./spring.png" alt="" className="d-flex justify-content-center daily-title current-title daily-img" />
        <button
          className="godown-button btn btn-primary"
          onClick={() => {
            if (godown != -1) {
              let x = document.getElementsByClassName("daily-th" + godown);
              if (x.length) x[0].style.visibility = "visible";
              if (x.length) x[0].style.transitionDuration = "1s";
              if (x.length) x[0].style.transformOrigin = "0% 0% 0px";
              let y = (document.getElementsByClassName("daily-container")[0].style.perspective = "3000px");
              if (x.length) x[0].style.transform = "rotate3D(1,0,0,0deg)";
              if (x.length)
                setTimeout(() => {
                  x[0].style.zIndex = 7 - godown + 2;
                }, 300);

              updateGodown();
            }
          }}
        >
          Previous Day
        </button>
      </div>
    </div>
  );
}

export default CardBody;
