import { Children } from "react"

type PlaceHolder={
    children:string
}
export const Heading=(props:PlaceHolder)=>{
    return(
        <h2>
            {props.children}
        </h2>
    )
}