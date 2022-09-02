// import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Data from "./pages/data/Data";
import List from "./pages/list/List";
import New from "./pages/new/New";
import Main from "./pages/main/Main";
import Single from "./pages/single/Single";
import {BrowserRouter,Routes, Route} from "react-router-dom";
import "./style/dark.scss"
import { useContext, useState, useEffect, Component } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Proses from "./pages/proses/Proses";
import NewData from "./pages/newdata/NewData";

import AddAdmin from './components/api/AddAdmin';
import ListAdmin from './components/api/ListAdmin';
import EditAdmin from './components/api/EditAdmin';
import ShowAdmin from "./components/api/ShowAdmin";
import ListData from "./components/apidata/ListData";
import AddData from "./components/apidata/AddData";
import EditData from "./components/apidata/EditData";
import TestChart from "./components/testchart/TestChart";

function App() {

  const{darkMode} = useContext(DarkModeContext);


  return (
    <div className={darkMode ? "app dark" : "app"} >
      <BrowserRouter>
        
          <Routes>
            <Route path="/">
                <Route index element={<Main/>}/> 
                {/* <Route index element={<Home/>}/> */}
                <Route path="home" element={<Home/>}/>
                 <Route path="data">
                  <Route index element={<Data/>}/>
                  <Route path="newdata" element={<NewData/>}/>
                </Route>
                <Route path="proses" element={<Proses/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="users">
                  <Route index element={<List/>}/>
                  <Route path=":userid" element={<Single/>}/>
                  <Route path="new" element={<New/>}/>
                </Route>
                <Route path="/list-admin" element={<ListAdmin/>}/>
                <Route path="/add-admin" element={<AddAdmin/>}/>
                <Route path="/edit-admin/:id" element={<EditAdmin/>}/>
                <Route path="/show-admin/:id" element={<ShowAdmin/>}/>
                <Route path="/list-data" element={<ListData/>}/>
                <Route path="/add-data" element={<AddData/>}/>
                <Route path="/edit-data/:id" element={<EditData/>}/>
                <Route path="/testcharts" element={<TestChart/>}/>


            </Route>
          </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
