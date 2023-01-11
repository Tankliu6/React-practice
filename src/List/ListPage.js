import React, { useState } from "react";
import "./ListPage.scss";

export default function ListPage(){
    const [items, setItems] = useState([]); //initialize state to hold the list of items

    function handleAddItem(){
        const message = document.querySelector(".record-input").value;
        setItems([...items, message]) // add new item to the state
    }

    return (
        <>
            <div className = "wrap-record">
                <input className = "record-input" placeholder = "ToDo-List" type="text"></input>
                <div className = "record-button" onClick={handleAddItem}>新增紀錄</div>
            </div>
            <ul className = "list">
                {items.map((item, index) => <Item 
                    index = {index} 
                    key={index} 
                    message={item} 
                    items = {items} 
                    setItems = {setItems} 
                    />
                )}
            </ul>
        </>
    )
}

function Item({message, index, items, setItems}){
    return(
        <li className = "wrap-item">
            <div className = "item-text">{message}</div>
            <RemoveThisItem index = {index} items = {items} setItems = {setItems}/>    
        </li>
    )
}

function RemoveThisItem({index, items, setItems}){
    return(
        <>
            <div className = "remove-item-button" onClick = {() => {
                const halfBeforeDeleteItem = items.slice(0,index);
                const halfAfterDeleteItem = items.slice(index + 1);
                setItems([...halfBeforeDeleteItem, ...halfAfterDeleteItem]);
            }}>
                刪除
            </div>
        </>
    )
}