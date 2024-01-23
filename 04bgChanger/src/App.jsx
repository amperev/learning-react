import { useState } from "react";
import ColorButton from "./components/ColorButton";

function App() {
  const [color, setColor] = useState("olive");
  let colors =["red","green","blue","orange","yellow","brown","white","lavender"]
  let colorList= colors.map((color,index)=> <ColorButton key ={index} color={color} setColor={setColor}/>)

  return (
    <div
      className="w-full h-screen duration-200 "
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {colorList}
        </div>
      </div>
    </div>
  );
}

export default App;
