import React from "react";

type ButtonProps={
    handleClick: (event: React.MouseEvent<HTMLButtonElement>,id:number)=> void;
}
export const Button=(props:ButtonProps)=>{
    return(
        <button onClick={(event)=>props.handleClick(event,1)}>Click</button>
    )
}
//This is a event handler which is basically a callback routune that operates asynchronously once an event takes place
// Event	    Description
// onchange	    An HTML element has been changed
// onclick	    The user clicks an HTML element
// onmouseover	The user moves the mouse over an HTML element
// onmouseout	The user moves the mouse away from an HTML element
// onkeydown	The user pushes a keyboard key
// onload	    The browser has finished loading the page
