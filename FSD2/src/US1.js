import {useState} from "react";
function US1(){
    const[count,setcount]=useState(0)
    return(<>
        <button onClick={()=>{setcount(count+1)}}>Increment</button>
        <h1>{count}</h1>
        </>
    )
}
export default US1