import React, { useEffect, useState } from "react";

export function Weather() {
  const [data, setData] = useState({
    lat: Number,
    lon: Number,
    name: String,
  });


  /* 46c5803c98e52b01848f7d62ea9f0fb1 */
  async function fetchDetails() {
    const response = await fetch(
      "http://api.openweathermap.org/geo/1.0/direct?q=istanbul&limit=5&appid=46c5803c98e52b01848f7d62ea9f0fb1"
    );
    const items = await response.json();
    setData({
      lat: items[0].lat,
      lon: items[0].lon,
      name: items[0].name,
    });

    const weather = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?cnt=7&lat=${data.lat}&lon=${data.lon}&appid=46c5803c98e52b01848f7d62ea9f0fb1`
    );
    const weathers = await weather.json();
    console.log(weathers);
  }
fetchDetails()

  return (
    <div className="dropdown show">
      <a
        className="btn btn-secondary dropdown-toggle"
        role="button"
        href="/#"
        id="dropdownMenuLink"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Dropdown link
      </a>

      <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <a className="dropdown-item" href="/#">
          Action
        </a>
        <a className="dropdown-item" href="/#">
          Another action
        </a>
        <a className="dropdown-item" href="/#">
          Something else here
        </a>
      </div>
    </div>
  );
}
