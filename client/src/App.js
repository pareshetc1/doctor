import React, { useState } from "react";
import "./App.css";
import "antd/dist/antd.css";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DiseaseList from "./components/disease/DiseaseList";
import DiseasePriscription from "./components/disease/DiseasePriscription";

let App = () => {
  const [diseaseList, setDiseaseList] = useState([]);
  return (
    <Router>
      <Navbar />
      <main style={{ height: "90vh" }}>
        <Routes>
          <Route
            exact
            path="/disease-list"
            element={
              <DiseaseList
                diseaseList={diseaseList}
                setDiseaseList={setDiseaseList}
              />
            }
          />
          <Route
            exact
            path="/"
            element={
              <DiseasePriscription
                diseaseList={diseaseList}
                setDiseaseList={setDiseaseList}
              />
            }
          />
        </Routes>
      </main>
    </Router>
  );
};
export default App;
