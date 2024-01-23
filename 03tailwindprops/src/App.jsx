import "./App.css";
import Card from "./components/Card";
function App() {
  return (
    <>
      <h1 className="bg-green-500 text-black p-4 rounded-xl mb-4">Tailwind</h1>
      <Card username="Test " btnText="click"/>
      <Card username="Run " btnText="visit"/>
    </>
  );
}

export default App;
