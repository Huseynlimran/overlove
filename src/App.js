import React from "react";
import Header from "./Components/Header";
import Ceo from "./Components/Ceo";
import Slide from "./Components/slide";
import Design from "./Components/Design";
import Project from "./Components/Project";
import Download from "./Components/Download";
import Footer from "./Components/Footer";


const App = () =>{
  return (
    <div>
      <Header />
      <Ceo />
      <Slide />
      <Design />
      <Project />
      <Download />
      <Footer />
    </div>
  );
}

export default App;
