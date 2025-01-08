import React from "react";
import Header from "./components/Header";
import AppTable from "./components/AppTable";
import Footer from "./components/Footer";
import './App.css';
import apps from './data/appsData';

const App = () => {
  console.log('Apps:', apps);

  return (
    <div className="app">
      <Header />
      <AppTable apps={apps} />
      <Footer />
    </div>
  );
};

export default App;

