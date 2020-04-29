import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "@urbica/react-map-gl";
import Pin from "../asset/locate.png";
import "./mapCase.css";

const Map = (props) => {
  const [viewport, setViewport] = useState({
    latitude: 36,
    longitude: 16,
    zoom: 1.5,
  });
  const [locate, setLocate] = useState([]);
  const [selectPin, setSlectPin] = useState(null);
  const [pop, setPop] = useState(false);

  const getLocation = async () => {
    const response = await fetch("https://covid19.mathdro.id/api/recovered");
    const data = await response.json();
    setLocate(data);
  };

  const updateView = () => {
    return locate.map((data) => {
      if (props.location === data.countryRegion) {
        setViewport({
          latitude: data.lat,
          longitude: data.long,
          zoom: 4,
        });
        setSlectPin(data);
      }
    });
  };

  const checkPop = () => {
    if (props.location !== undefined) {
      setPop(true);

      updateView();
    } else {
      setPop(false);
      setViewport({
        latitude: 36,
        longitude: 16,
        zoom: 1.5,
      });
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    checkPop();
  }, [props.location]);

  const popReturn = () => {
    return (
      <div>
        <ReactMapGL
          style={{ width: "100%", height: "88vh" }}
          mapStyle="mapbox://styles/mapbox/light-v9"
          accessToken={
            "pk.eyJ1Ijoic2hyZWV0cyIsImEiOiJjazlqa240NjIwOTY5M2hwOGNmbTE2YTc1In0.oF-rBv3-aKL90FnHJPDHSQ"
          }
          latitude={viewport.latitude}
          longitude={viewport.longitude}
          zoom={viewport.zoom}
          onViewportChange={setViewport}
        >
          {locate.map((data) => (
            <Marker
              key={data.combinedKey}
              latitude={data.lat}
              longitude={data.long}
            >
              <div>
                <img
                  className="pin"
                  src={Pin}
                  onMouseOver={(e) => {
                    e.preventDefault();
                    setSlectPin(data);
                  }}
                  onMouseOut={(e) => {
                    e.preventDefault();
                    setSlectPin(null);
                  }}
                />
              </div>
            </Marker>
          ))}
          {selectPin || (pop && selectPin) ? (
            <Popup
              latitude={selectPin.lat}
              longitude={selectPin.long}
              onClose={() => {
                setSlectPin(null);
              }}
            >
              <div className="pin-info">
                <span className="pin-name">{selectPin.combinedKey}</span>
                <br />
                <span className="pin-confirm">
                  Confirmed : {selectPin.confirmed}
                </span>
                <br />
                <span className="pin-recover">
                  Recovered : {selectPin.recovered}
                </span>
              </div>
            </Popup>
          ) : null}
        </ReactMapGL>
      </div>
    );
  };

  return popReturn();
};

export default Map;
