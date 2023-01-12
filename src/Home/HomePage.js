import React from "react";
import { NavLink } from "react-router-dom";
import "./HomePage.scss";

export default function HomePage(){
    return(
        <>
        <h1 className = "title">React 練習專案</h1>
        <div className = "welcome">歡迎光臨我的頁面</div>
        <NavLink to = {`/list`}><div className = "button-switch">點此開始</div></NavLink>
        </>
    )
}