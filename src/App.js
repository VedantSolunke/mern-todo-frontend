import "./App.css";
import ToDo from "./components/Todo";

function App() {
  return (
    <div className="App">
      <h1 className="text-center font-bold text-3xl md:text-5xl py-10 text-[#4F4A45]">
        Welcome to the Todo App
      </h1>
      <div className="md:w-6/12 mx-auto">
        <ToDo />
      </div>
    </div>
  );
}

export default App;
