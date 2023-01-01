import React from "react"
//WE ARE IMPORTING THE TYPES USED IN THIS FILE FROM ANOTHER FILE WE CREATED JUST FOR INPUT TYPES
import { InputType } from "./Input.types"
// export const Input=(prop:InputType)=>{
//     const changer=(change: React.ChangeEvent<HTMLInputElement>)=>{
//         console.log(change)
//     }
//     return(
//         <input type="text" value={prop.value} onChange={changer}/>
//     )
// }
//Input requires two props 1)Input Value 2)OnChangeHandler
//          DESTRUCTURING PROPS(MORE PREFFERED)
export const Input=({value,handleChange}:InputType)=>{
    const changer=(change: React.ChangeEvent<HTMLInputElement>)=>{
        console.log(change)
    }
    return(
        <input type="text" value={value} onChange={changer}/>
    )
}
