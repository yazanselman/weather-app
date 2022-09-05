import axios from "axios";
import { useEffect } from "react";

export function Weather() {
  
  /* 46c5803c98e52b01848f7d62ea9f0fb1 */

  useEffect(() => {
    (async () => {
      const response = await axios(
        "https://api.openweathermap.org/geo/1.0/direct?q=istanbul&limit=5&appid=46c5803c98e52b01848f7d62ea9f0fb1"
      );

      const weather = await axios(
        `https://api.openweathermap.org/data/2.5/forecast?cnt=7&lat=${response.data[0].lat}&lon=${response.data[0].lon}&appid=46c5803c98e52b01848f7d62ea9f0fb1`
      );

      console.log(weather);
      
    })();
  }, []);

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
