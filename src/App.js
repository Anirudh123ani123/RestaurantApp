import Restaurant from "./restaurant/Restaurant";
import './App.css'
function App() {
  console.log("size=",window.innerWidth);
  return (
    <div className="app">
      <Restaurant/>
    </div>
  );
}

export default App;
