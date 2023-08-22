import { useState } from "react";

function App() {
  const clicked = () => {
    setCount(count + 1);
    if (buttonClass === "bg-green-600") {
      setButtonClass("bg-red-500");
    } else {
      setButtonClass("bg-green-600");
    }
  };

  const [count, setCount] = useState(0);
  const [buttonClass, setButtonClass] = useState("bg-green-600");

  return (
    <div className="flex justify-center align-middle items-center h-screen">
      <button
        className={buttonClass + " rounded h-10 p-1 transition-all ease-linear"}
        onClick={clicked}
      >
        Click me {count}
      </button>
    </div>
  );
}

export default App;
