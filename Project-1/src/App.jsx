import React from "react";
import "./App.css";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
export const App = () => {
  return (
    <div>
      <Navigation />
      <Hero />
    </div>
  );
};
