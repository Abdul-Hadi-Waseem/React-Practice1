import { getOutputFileNames } from "typescript"

type myProp={
    name:string
    age?:number
    isLoggedIn:boolean
}
export const Greet = (prop:myProp)=>{
// if(prop.isLoggedIn){
//     return <div>Hello</div>
// }else{
//     return <div>Fuck You</div>
// }
//To declare that age is optional either declare a question mark in type or just simple do this:
const {age = 0}=prop;
return(
    <div>
        {
            prop.isLoggedIn && "Hello Love" || "FuckYou"
        }
    </div>
)
    // return(
// <div>
//     <h1>
//     {
//         (prop.isLoggedIn) ? `Welcome ${prop.name}\tYour Age Is: ${prop.age}` : "Welcome Guest"    
//     }
//     </h1>
// </div>
// );
}