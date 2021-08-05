import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from 'react';


function mapsSelector() {
  if (
    /* if we're on iOS, open in Apple Maps */
    navigator.platform.indexOf("iPhone") != -1 ||
    navigator.platform.indexOf("iPad") != -1 ||
    navigator.platform.indexOf("iPod") != -1
  )
    window.open("maps://maps.google.com/maps?daddr=<lat>,<long>&amp;ll=");
  /* else use Google */ else
    window.open("https://maps.google.com/maps?daddr=<lat>,<long>&amp;ll=");
}

function App() {
  const vodaLat = "-33.8913708";
  const vodaLong = "18.5129694";
  const vodaName = "Entelect+-+Cape+Town+Office";

  const [long, setLong] = useState("");
  const [lat, setLat] = useState("");
  const [err, setErr] = useEffect("");

  useEffect(() => {
    findPosition();
  },[]);
  
  const findPosition = () => {
    navigator.geolocation.getCurrentPosition(position => {
      console.log(position);
      setLat(position.coords.latitude.toString())
      setLong(position.coords.longitude.toString())
    }, error => {
        setErr(locationError(error))
        console.error(error)
    }, {
      timeout: 2000,
      maximumAge: 20000,
      enableHighAccuracy: true
    })
  }

  return (
    <div className="App">
      <div>
        <h1>Testing stuffs</h1>
        <h3>Email</h3>
        <a href="mailto:test@gmail.com">test@gmail.com</a>
        <hr />
        <h3>Phone</h3>
        <a href="tel:0831231231">0831231231</a>
        <hr />
        <h3>Google maps</h3>
        <a
          href={`https://www.google.com/maps/search/${vodaName}/@${vodaLat},${vodaLong},15z`}
        >
          Open Google maps
        </a>
        <hr />
        <h3>Apple maps</h3>
        <a
          href={`
        http://maps.apple.com/?q=${navodaNameme}&sll=${vodaLat},${vodaLong}&z=10&t=s`}
        >
          Open Apple maps
        </a>
        <hr />
        <h3>Get Location</h3>
          <p>Lat: {lat} : Lng: {long}</p>
      </div>
    </div>
  );
}

function locationError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      return "User denied the request for geolocation.";
    case error.POSITION_UNAVAILABLE:
      return "Location information is currently unavailable.";
    case error.TIMEOUT:
      return "Request for user location timed out.";
    case error.UNKNOWN_ERROR:
      return "An unknown error occurred.";
  }
}

export default App;
