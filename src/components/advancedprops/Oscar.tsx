type OscarProps={
    children: React.ReactNode; //Ye humne usko bataya hai k iskay children ki type koi react component hai jo already bana hua hai ya humne banaya hai 
}
export function Oscar(props:OscarProps){
    return(
        <div>
            {/* Leonardo Dicaprio */}
            {props.children}
        </div>
    )
}