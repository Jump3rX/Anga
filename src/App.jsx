import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Cards from "./components/Cards";
import Header from "./components/Header";
import LocationInput from "./components/LocationInput";
function App() {
  return (
    <>
      <div className="container text-center">
        <Header />
        <LocationInput />
        <Cards />
      </div>
    </>
  );
}

export default App;
