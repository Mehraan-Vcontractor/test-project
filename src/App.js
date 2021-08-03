import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <h1>Testing stuff s</h1>
        <h3>Email</h3>
        <a href="mailto:someone@yoursite.com">test@gmail.com</a>
        <hr />
        <h3>Phone</h3>
        <a href="tel:0831231231">0831231231</a>
        <hr />
        <h3>Google maps</h3>
        <a href="https://www.google.com/maps/@-33.8913753,18.5151581,15z">
          Open Google maps
        </a>
        <hr />
        <h3>Apple maps</h3>
        <a
          href="
        http://maps.apple.com/?q=Entelect&sll=-33.8913753,18.5151581&z=10&t=s"
        >
          Open Apple maps
        </a>
        <hr />
      </div>
    </div>
  );
}

export default App;
