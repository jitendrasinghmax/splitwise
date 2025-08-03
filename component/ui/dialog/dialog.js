"use client"
import { useState } from "react";

export default function () {
    const [show, setShow] = useState(true);
    const DialogTrigger=function(props){
        return  <div style={{width:"100%"}} onClick={()=>setShow(true)}>{props.children}</div>

    }
    const DialogContainer=function(props){
        return <>{show&&<div className={`dialog-div`}>{props.children}</div>}</>
    }
    return {DialogContainer,DialogTrigger}
}