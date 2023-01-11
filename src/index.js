// import "./index.scss";
import React from "react";
// import { ReactDOM } from "react-dom";
import { createRoot } from 'react-dom/client';
// import HomePage from "./HomePage";
// import ListPage from "./ListPage";
import App from "./App";

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { firebaseConfig } from "./setting.js";

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


const rootNode = document.querySelector(".root");
const root = createRoot(rootNode);

// function HandleButton({isActive, setIsActivate, buttonName}){
//     return(
//         <button 
//             className = "button-switch"
//             onClick = {() => 
//                 {   
//                     if(isActive === true){
//                         setIsActivate(false);
//                     }else{
//                         setIsActivate(true);
//                     }
//                 }
//             }
//         >{buttonName}</button>
//     )
// }

// function App(){
//     let content;
//     const [isActive, setIsActivate] = useState(true);
//     let buttonName = "";
//     if (isActive){
//         buttonName = "點此開始";
//         content = <HomePage/>;
//     }else{
//         buttonName = "返回首頁";
//         content = <ListPage/>;
//     }
//     return(
//         <div className = "wrap-content">
//             {content}
//             <HandleButton isActive = {isActive} setIsActivate = {setIsActivate} buttonName = {buttonName}/>
//         </div>
//     )
// }


root.render(<App />)
