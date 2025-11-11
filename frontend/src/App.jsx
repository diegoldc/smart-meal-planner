import appLogo from "./assets/logo.png";
import "./App.css";
import Login from "./components/Login.jsx";

function App() {

  return (
    <>
      <img src={appLogo} className="logo" alt="Vite logo" />

      <Login />
    </>
  );
}

export default App;
