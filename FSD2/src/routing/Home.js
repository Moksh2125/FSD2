import p from "../p.jfif"
export default function Home()
{
    return(
        <div>
            <h1 style={{color:"blue",textAlign:"center"}}>
                Welcome to HOME page
            </h1>
            <img src={p} style={{display:"block",margin:"0 auto",height:"500px",width:"800px"}} alt="Home"/>
        </div>
    )
}