import "./App.css";
import Counter from "./components/Counter";
import ExponentTwo from "./components/ExponentTwo";
import ExponentThree from "./components/ExponentThree";
import ExponentFour from "./components/ExponentFour";
import ExponentFive from "./components/ExponentFive";
import ExponentSix from "./components/ExponentSix";
import { useState } from "react";


function App() {

  const [exponentsCount, setExponentCount] = useState(0)

  const handleExpontentsCount = (newCount) => {
    const newExponentCount = newCount
    setExponentCount(newExponentCount)
  }

  return (
    <div className="App">
      <h2><em>Counter</em></h2>

      <Counter handleExpontentsCount={handleExpontentsCount} count={exponentsCount} />

      <br />
      <h2><em>Exponents</em></h2>

      <div className="container">
        <ExponentTwo exponentsCount={exponentsCount} />
        <ExponentThree exponentsCount={exponentsCount} />
        <ExponentFour exponentsCount={exponentsCount} />
        <ExponentFive exponentsCount={exponentsCount} />
        <ExponentSix exponentsCount={exponentsCount} />
      </div>
    </div>
  );
}

export default App;
