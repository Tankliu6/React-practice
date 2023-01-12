import "./App.scss";
import React, { useState } from "react";
import HomePage from "./Home/HomePage";
import ListPage from "./List/ListPage";
import { Route, BrowserRouter, Routes } from "react-router-dom";



export default function App(){
    return(
        <>
        <BrowserRouter>
        <div className = "wrap-content">
                <Routes>
                    <Route exact path = "/" element = { <HomePage/> } />;
                    <Route path = "/list" element = { <ListPage/> } />;
                </Routes>
        </div>
        </BrowserRouter>
        </>
    )
}
