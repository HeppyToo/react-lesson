import logo from "./logo.svg";
import "./App.css";
import Card from "./components/card/card";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Card name={"Volodya"} surname={"Smyk"} />
      <Card name={"Andrii"} surname={"Andreitsiv"} />
    </div>
  );
}

export default App;
