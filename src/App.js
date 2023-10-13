import "./App.css";
import ColorPicker from "./Components/ColorPicker";

function App() {
  const colors = [
    "red",
    "orange",
    "cyan",
    "lime",
    "green",
    "blue",
    "yellow",
    "purple",
    "lightpink",
    "violet",
    "lightgreen",
    "lightblue",
    "grey",
    "darkblue",
    "black",
    "brown",
    "olive",
  ];
  return (
    <div>
      <h1>Color Picker</h1>
      <ColorPicker colors={colors} />
    </div>
  );
}

export default App;
