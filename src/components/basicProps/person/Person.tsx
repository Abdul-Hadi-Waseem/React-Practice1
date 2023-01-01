import { personType } from "./Person.types"
export const Person = (prop:personType) => {
    return(
        <div>
            <h1>{prop.pName.fname}</h1>
            <h2>{prop.pName.lname}</h2>
        </div>
    )
}