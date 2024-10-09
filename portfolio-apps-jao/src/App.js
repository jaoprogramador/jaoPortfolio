import React from "react";
import Header from "./components/Header";
import AppTable from "./components/AppTable";
import Footer from "./components/Footer";
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <AppTable />
      <Footer />
    </div>
  );
};

export default App;

