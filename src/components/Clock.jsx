import { useState } from "react";

function Clock() {
  const [finalTime, seFinalTime] = useState("");

  window.setInterval(() => {
    let date = new Date().toLocaleTimeString();
    seFinalTime(date);
  }, 1000);

  return (
    <div className="clock col-4 d-flex justify-content-end align-content-center ">
      <div className="row">
        <div className="col">
          <i className="fa-solid fa-clock"></i>
          <pre> </pre>
        </div>
        {finalTime}
      </div>
    </div>
  );
}

export default Clock;
