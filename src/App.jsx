import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-8xl texzt-red-700">Hello Heroes</h1>
      </div>
    </>
  );
}

export default App;
