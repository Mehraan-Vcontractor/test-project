import logo from "./logo.svg";
import "./App.css";

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
  const lat = "-33.8913708";
  const long = "18.5129694";
  const name = "Entelect+-+Cape+Town+Office";
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
          href={`https://www.google.com/maps/search/${name}/@${lat},${long},15z`}
        >
          Open Google maps
        </a>
        <hr />
        <h3>Apple maps</h3>
        <a
          href={`
        http://maps.apple.com/?q=${name}&sll=${lat},${long}&z=10&t=s`}
        >
          Open Apple maps
        </a>
        <hr />
      </div>
    </div>
  );
}

export default App;
