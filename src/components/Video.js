import React from "react";
import './Video.css';
import ReactDom from 'react-dom';
function Video(props){
    const handleClick=(e)=>{
        e.preventDefault();
        e.target.muted=!e.target.muted
    }
    const handleScroll=(e)=>{
        let next=ReactDom.findDOMNode(e.target).nextSibling
        if(next){
            next.scrollIntoView();
            e.target.muted=true
        }
    }
    return (
        <video src={props.src} onEnded={handleScroll} className="videos-styling" muted="muted" onClick={handleClick}  >
            
        </video>
    )
}
export default Video;