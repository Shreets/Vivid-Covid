import React, { useState, useEffect } from "react";
import "./App.css";
import Nav from "./container/nav/nav";
import Stats from "./container/stats/stats";
import MapCase from "./container/map/mapCase";
import Footer from "./container/footer/footer";
// import Affected from "./container/least-affected/least-affected";

function App() {
  const url = "https://covid19.mathdro.id/api";
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [country, setCountry] = useState();
  const [countryOption, setCountryOption] = useState([]);
  const [confirm, setConfirmed] = useState();
  const [recover, setRecovered] = useState();
  const [date, setDate] = useState();

  const dateStr = new Date(date);
  const dateFormat =
    dateStr.getDate() +
    " " +
    months[dateStr.getMonth()] +
    " " +
    dateStr.getFullYear();

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setConfirmed(data.confirmed.value);
      setRecovered(data.recovered.value);
      setDate(data.lastUpdate);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchSelectedData = async () => {
    try {
      const response = await fetch(
        `https://covid19.mathdro.id/api/countries/${country}`
      );
      const data = await response.json();
      setConfirmed(data.confirmed.value);
      setRecovered(data.recovered.value);
      setDate(data.lastUpdate);
    } catch (error) {
      console.log(error);
    }
  };

  const getCountries = async () => {
    const response = await fetch(`${url}/countries`);
    const data = await response.json();
    const fetchCountry = data.countries.map((country) => country.name);
    setCountryOption(fetchCountry);
  };

  useEffect(() => {
    if (country === undefined) {
      fetchData();
    } else {
      fetchSelectedData();
    }
  }, [country]);

  useEffect(() => {
    getCountries();
  }, []);

  const countrySelect = (e) => {
    setCountry(e.target.value);
  };

  const recoverSelect = () => {
    fetchData();
  };

  return (
    <div className="App">
      <div className="nav">
        <Nav recoverSelect={recoverSelect} />
      </div>

      <div className="stats">
        <Stats confirm={confirm} recover={recover} date={dateFormat} />
      </div>

      <div className="map">
        <MapCase
          url={url}
          countryOption={countryOption}
          select={countrySelect}
          country={country}
        />
      </div>
      {/* 
      <div className="least-affected">
        <Affected />
      </div> */}

      <div className="footer">
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default App;
