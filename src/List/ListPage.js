import "./ListPage.scss";
import React, { useState } from "react";
import { db } from "../firebase";
import {
    doc,
    collection, 
    addDoc, 
    getDocs,
    deleteDoc,
    setDoc,
    getDoc,   
    where, 
    query,
    limit,
    onSnapshot 
} from "firebase/firestore";
import {  NavLink } from "react-router-dom";

const collectionMessage = collection(db, "message");

export default function ListPage(){
    const [init, setInit] = useState(true);
    //initialize state to hold the list of items
    const [items, setItems] = useState([]);
    const [docRefId, setDocRefId] = useState([]);
    if (init){
        const ids = [];
        const docs = [];
        async function MessageFromFirestore(){
            try{
                const querySnapshot = query(
                    collectionMessage,
                )
                const docsSnap = await getDocs(querySnapshot);
                docsSnap.forEach(doc => {
                    docs.push(doc.data().message);
                    ids.push(doc.id);
                });
                setItems([...items, ...docs]);
                setDocRefId([...docRefId, ...ids]);       
            }catch(e){
                console.log(e);
            }finally{
                setInit(false);
            };
        }
        MessageFromFirestore();
    };


    async function handleAddItem(){
        const message = document.querySelector(".record-input").value;
        try{
            const docRef = await addDoc(collectionMessage, {
                message: message,
            });
            setItems([...items, message]);
            setDocRefId([...docRefId, docRef.id]);
            console.log("Document written with ID: ", docRef.id);  
        }catch (e){
            console.error("Error adding document", e);
        }
    }
    console.log("fire")
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
                    docRefId = {docRefId}
                    setDocRefId = {setDocRefId}
                    />
                )}
            </ul>
            <NavLink to = "/"><div className = "button-switch">點此返回</div></NavLink>
        </>
    )
}

function Item({message, index, items, setItems, docRefId, setDocRefId}){
    return(
        <li className = "wrap-item">
            <div className = "item-text">{message}</div>
            <RemoveThisItem index = {index} items = {items} setItems = {setItems} docRefId = {docRefId} setDocRefId={setDocRefId}/>    
        </li>
    )
}

function RemoveThisItem({index, items, setItems, docRefId, setDocRefId}){
    return(
        <>
            <div className = "remove-item-button" onClick = {async () => {
                const halfBeforeDeleteItem = items.slice(0,index);
                const halfAfterDeleteItem = items.slice(index + 1);
                const halfBeforeDeleteId = docRefId.slice(0, index);
                const halfAfterDeleteId = docRefId.slice(index+1);    
                const idToDelete = docRefId[index];
                setItems([...halfBeforeDeleteItem, ...halfAfterDeleteItem]);
                setDocRefId([...halfBeforeDeleteId, ...halfAfterDeleteId]);
                try{
                    const docRef = doc(db, "message", `${idToDelete}`);
                    await deleteDoc(docRef);
                    console.log("Document docRefId is deleted : " + idToDelete);
                }catch(e){
                    console.error("Error deleting document", e);
                }
            }}>
                刪除
            </div>
        </>
    )
}