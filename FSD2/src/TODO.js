import {useState} from "react";
function TODO(){
    const[task,settask]=useState("")
    const[todolist,settodolist]=useState([])
    function handlechange(e){
        settask(e.target.value)
    }
    function addtask(){
        settodolist([...todolist,task])
        settask("");
    }
    function deletetask(taskname){
        settodolist(todolist.filter((t)=>{if(t!==taskname){return true}else{return false}}))
        }
    return(<>
        <h1 style={{textAlign:"center"}}>TO DO LIST</h1>
        <input onChange={handlechange}/>
        <button onClick={()=>{addtask()}} style={{color:"white",backgroundColor:"Green",height:"30px",width:"70px",borderRadius:"5px",margin:"5px"}}>ADD Task</button>
        {
            todolist.map((t)=>{
                return(<div>
                    <h3>
                        {t}
                    </h3>
                    <button onClick={()=>{deletetask(t)}} style={{color:"white",backgroundColor:"red",height:"30px",width:"70px",borderRadius:"5px",margin:"5px"}}>DELETE Task</button>
                </div>)
            })
        }
        </>
    )
}
export default TODO