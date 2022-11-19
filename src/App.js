import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import MainPage from './component/MainPage';
import ViewPage from './component/ViewPage';
import Introduce from "./component/Introduce";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage/>}/> 
        <Route path="viewpage/:idx" element={<ViewPage/>}/>
        <Route path="introduce/" element={<Introduce/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
