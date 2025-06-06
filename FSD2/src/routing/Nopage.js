import P3 from "../P3.jfif"
export default function Home()
{
    return(
        <div>
            <h1 style={{color:"green",textAlign:"center"}}>
                Welcome to NOPAGE page
            </h1>
            <img src={P3} style={{display:"block",margin:"0 auto",height:"500px",width:"800px"}} alt="Home"/>
        </div>
    )
}