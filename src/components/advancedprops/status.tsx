type propType={
    status:"loading"|"success"|"Error"
}
export function Status(props:propType){
    let message;
if(props.status==="loading"){
    message="Loading";
}else if(props.status==="success"){
    message="success";
}else if(props.status==="Error"){
    message="Error";
}
return(
    <div>
        <h1>STATUS: {message}</h1>
    </div>
)
}