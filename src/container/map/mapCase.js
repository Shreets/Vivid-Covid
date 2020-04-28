import React from "react";
import "./mapCase.css";
import { NativeSelect, FormControl } from "@material-ui/core";
import Map from "./map";
import ReactMapGL, { Marker, Popup } from "@urbica/react-map-gl";
import Pin from "../asset/locate.png";

const MapCase = (props) => {
  // const
  return (
    <div className="map-wrapper">
      <div className="frame">
        <Map location={props.location} />
      </div>
      <div className="search">
        <FormControl className="form__input">
          <NativeSelect defaultValue="" onChange={props.select}>
            <option>-- Search by Country --</option>
            {props.countryOption.map((country, i) => (
              <option key={i} value={country}>
                {country}
              </option>
            ))}
          </NativeSelect>
        </FormControl>
      </div>
    </div>
  );
};

export default MapCase;
