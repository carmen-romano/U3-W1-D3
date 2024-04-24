import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";

function App() {
  return (
    <div className="App">
      <Welcome />
      <MyNav />
      <AllTheBooks />
      <MyFooter />
    </div>
  );
}

export default App;
