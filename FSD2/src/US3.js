import {useState} from "react";
function US3(){
    const[data, setdata]=useState({})
    function handlechange(e){
        const{name,value}=e.target
        setdata({...data,[name]:value})
    }
    return(<div>
        <input name="fname" placeholder="FirstName" onChange={handlechange}/>
        <input name="lname" placeholder="LastName" onChange={handlechange}/>
        <h1>Welcome {data.fname} {data.lname}</h1>
    </div>)
}
export default US3