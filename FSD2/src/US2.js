import {useState} from "react";
function US2(){
    const color=["black","red","blue","green","yellow","pink","cyan","brown","purple","violet","orange","gold"]
    const[count,setcount]=useState(10)
    const[txtcolor,setcolor]=useState([])
    const[index,setindex]=useState(0)
    function inc(){
        if(count<20)
        {
            setcount(count+1)
        }
        else
        {
            return false;
        }
    }
    function col(){

            if(txtcolor!==color[color.length-1])
            {
                setindex(index+1)
                setcolor(color[index])
            }
            else{
                setcolor(color[0])
                setindex(0)
            }
        }
    function dec(){
        if(count>0)
        {
            setcount(count-1)
        }
        else
        {
            return false;
        }
    }
    return(<>
        <h1 style={{textAlign:"center",color:txtcolor}}>{count}</h1>
        <button onClick={()=>{inc()}} style={{color:"white",backgroundColor:"Green",height:"30px",width:"70px",borderRadius:"5px",margin:"5px"}}>Increment</button>
        <button onClick={()=>{dec()}} style={{color:"white",backgroundColor:"red",height:"30px",width:"70px",borderRadius:"5px",margin:"5px"}}>Decrement</button>
        <button onClick={()=>{col()}} style={{color:"white",backgroundColor:"black",height:"30px",width:"70px",borderRadius:"5px"}}>Color</button>
        </>
    )
}
export default US2