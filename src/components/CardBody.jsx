import { useState } from "react";
import Current from "./Current";
import Daily from "./Daily";

function CardBody(props) {
  const [goup, setGoup] = useState(0);
  const [godown, setGodown] = useState(-8);
  function updateGoup() {
    setGodown(goup);
    setGoup(goup + 8);
  }
  function updateGodown() {
    setGoup(godown);
    setGodown(godown - 8);
  }
  return (
    <div className="card-body">
      <Current forecast={props.forecast} unit={props.unit} />
      <div className="daily-container">
        {props.forecast?.list?.map((item, index) => {
          if (index % 8 == 0) return <Daily key={index} id={index} forecast={item} unit={props.unit} goup={goup} godown={godown} />;
        })}
        <button
          className="goup-button btn btn-primary"
          onClick={() => {
            if (goup != 32) {
              let x = document.getElementsByClassName("daily-th" + goup);
              if (x.length) x[0].style.zIndex = 34;
              setTimeout(() => {
                if (x.length) x[0].style.transitionDuration = "1s";
                if (x.length) x[0].style.transformOrigin = "0px 0px 0px";
                let y = (document.getElementsByClassName("daily-container")[0].style.perspective = "3000px");

                if (x.length) x[0].style.transform = "rotate3D(1,0,0,265deg)";
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
            if (godown != -8) {
              let x = document.getElementsByClassName("daily-th" + godown);
              if (x.length) x[0].style.visibility = "visible";
              if (x.length) x[0].style.transitionDuration = "1s";
              if (x.length) x[0].style.transformOrigin = "0% 0% 0px";
              let y = (document.getElementsByClassName("daily-container")[0].style.perspective = "3000px");
              if (x.length) x[0].style.transform = "rotate3D(1,0,0,0deg)";
              if (x.length)
                setTimeout(() => {
                  x[0].style.zIndex = 32 - godown + 2;
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
