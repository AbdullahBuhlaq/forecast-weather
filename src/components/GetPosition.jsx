function GetPosition(props) {
  const success = (pos) => {
    const newcoords = {
      latitude: pos.coords.latitude,
      longitude: pos.coords.longitude,
    };
    props.setLocation(newcoords);
  };

  const error = (err) => {};

  function positionClickHandler() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      alert("Geolocation not available in your browser!");
    }
  }

  return (
    <div className="get-position col-2 d-flex justify-content-center">
      <div>
        <button
          type="submit"
          title="Get Your Location"
          className="btn btn-primary get-city-button "
          onClick={positionClickHandler}
        >
          <i
            className="fa-solid fa-location-dot"
            style={{ color: "white", opacity: "1" }}
          ></i>
        </button>
      </div>
    </div>
  );
}

export default GetPosition;
