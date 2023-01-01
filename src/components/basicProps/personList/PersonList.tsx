import { Name } from "../person/Person.types"
type PersonListProp={
    // names:{
    //     fname:string,
    //     lname:string
    // }[]
    names:Name[]
}
export function PersonList(props:PersonListProp){
return(
    <div>
        {
            props.names.map((x)=>{
                return <h1>FULL NAME: {x.fname} {x.lname}</h1>
            })
        }
    </div>
)
}