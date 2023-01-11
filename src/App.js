import "./App.scss";
import React, { useState } from "react";
import HomePage from "./Home/HomePage";
import ListPage from "./List/ListPage";
import {app, analytics} from "./firebase";

app;
analytics;

function HandleButton({isActive, setIsActivate, buttonName}){
    return(
        <button 
            className = "button-switch"
            onClick = {() => 
                {   
                    if(isActive === true){
                        setIsActivate(false);
                    }else{
                        setIsActivate(true);
                    }
                }
            }
        >{buttonName}</button>
    )
}

export default function App(){
    let content;
    const [isActive, setIsActivate] = useState(true);
    let buttonName = "";
    if (isActive){
        buttonName = "點此開始";
        content = <HomePage/>;
    }else{
        buttonName = "返回首頁";
        content = <ListPage/>;
    }
    return(
        <div className = "wrap-content">
            {content}
            <HandleButton isActive = {isActive} setIsActivate = {setIsActivate} buttonName = {buttonName}/>
        </div>
    )
}
