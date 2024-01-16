import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from "chart.js";
import { useEffect, useState } from "react";
import { weatherIcons, infoIcons, infoUnits } from "../iconsAndUnits";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

function Current(props) {
  const [data, setData] = useState({
    labels: ["may", "may", "may", "may", "may", "may", "may", "may"],
    datasets: [
      {
        label: "Dataset 1",
        data: [6, 1, 4, 3, 1, 2, 7, 8],
        backgroundColor: "#FF9494",
        borderColor: "#FFD1D1",
        pointBorderColor: "#FF9494",
        pointBorderWidth: 1,
        tension: 0.5,
        fill: {
          target: "origin", // 3. Set the fill options
          above: "rgba(255, 0, 0, 0.3)",
        },
      },
      {
        label: "Dataset 1",
        data: [5, 2, 6, 4, 2, 1, 6, 7],
        backgroundColor: "#0d6efd",
        borderColor: "#87A2FB",
        pointBorderColor: "#0d6efd",
        pointBorderWidth: 1,
        tension: 0.5,
        fill: "origin",
      },
    ],
  });

  const [options, setOptions] = useState({
    plugins: {
      legend: false,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: 0,
        max: 30,
        ticks: {
          stepSize: 4,
          callback: (value) => value,
        },
        grid: {
          borderDash: [5],
        },
      },
    },
  });

  const [info, setInfo] = useState({
    Clouds: 100,
    "Feels Like": 15,
    Humidity: 71,
    Pressure: 1016,
    UVI: 0,
    Visibility: 10000,
    Wind: 3.09,
    "Wind Deg": 200,
  });

  useEffect(() => {
    let labels = [];
    for (let i = 0; i < props.forecast.list.length; i += 8) {
      let date = new Date((props.forecast?.list[i]?.dt + 86400 * i) * 1000);
      labels.push(date.getDate() + "/" + (parseInt(date.getMonth()) + 1));
    }

    let ds0 = data.datasets[0],
      ds1 = data.datasets[1];
    let newData0 = [],
      newData1 = [];
    for (let i = 0; i < props.forecast.list.length; i += 8) {
      if (props.forecast.list) {
        newData0.push(props.forecast?.list[i]?.main?.temp_max);
        newData1.push(props.forecast?.list[i]?.main?.temp_min);
      }
    }
    ds0 = { ...ds0, data: newData0 };
    ds1 = { ...ds1, data: newData1 };

    setData({ ...data, labels, datasets: [ds0, ds1] });

    setOptions({
      ...options,
      scales: {
        ...options.scales,
        y: {
          ...options.scales.y,
          max: parseInt(Math.max(...newData0, ...newData1)) + 10,
          min: parseInt(Math.min(...newData0, ...newData1)) - 5,
          ticks: {
            stepSize: 4,
            callback: (value) => value + infoUnits[props.unit]["Feels Like"].props.children,
          },
        },
      },
    });

    let newInfo = {
      Clouds: props.forecast?.list[0]?.clouds.all,
      "Feels Like": props.forecast?.list[0]?.main?.feels_like,
      Humidity: props.forecast?.list[0]?.main?.humidity,
      Pressure: props.forecast?.list[0]?.main?.pressure,
      UVI: props.forecast?.list[0]?.main?.temp_kf,
      Visibility: props.forecast?.list[0]?.visibility,
      Wind: props.forecast?.list[0]?.wind?.speed,
      "Wind Deg": props.forecast?.list[0]?.wind?.deg,
    };

    setInfo({ ...info, ...newInfo });
  }, [props.forecast]);

  return (
    <div className="current">
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 current-section">
          <div>
            <div className="d-flex justify-content-center current-title">Current Weather</div>
          </div>
          <div className="temp-current">
            <div className="d-flex justify-content-center align-items-center">
              <i className={"weather-icon fa-solid " + weatherIcons[props.forecast?.list[0]?.weather[0].icon]}>{weatherIcons[props.forecast?.list[0]?.weather[0].icon] === "fa-cloud black-cloud" ? <i className={"weather-icon fa-solid fa-cloud above"}></i> : null}</i>
              <span className="current-temp">
                {parseInt(props.forecast?.list[0]?.main?.temp)}
                {infoUnits[props.unit]["Feels Like"]}
              </span>
            </div>
          </div>
          <div className="main-current">
            <div className="d-flex justify-content-center current-main">{props.forecast?.list[0]?.weather[0].main}</div>
            <div className="d-flex justify-content-center current-description">{props.forecast?.list[0]?.weather[0].description}</div>
          </div>
        </div>
        <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12 current-chart">
          <Line data={data} options={options}>
            {" "}
          </Line>
        </div>
      </div>
      <div className="row d-flex jusitfy-content-center align-item-center current-footer">
        {Object.keys(info).map((item, index) => {
          return (
            <div className="col-4 col-sm-4 col-md-3 col-lg info" key={index}>
              <div className="row d-flex justify-content-center">
                <div className="d-flex justify-content-center">
                  <i className={"fa-solid " + infoIcons[item]}></i>
                </div>
                <div className="d-flex justify-content-center info-item">{item}</div>
              </div>
              <div className="row">
                <div className="col d-flex justify-content-center info-value">
                  <div>
                    {item == "Feels Like" ? parseInt(info[item]) : info[item]}
                    {infoUnits[props.unit][item]}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Current;
