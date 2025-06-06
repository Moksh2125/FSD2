import P2 from "../P2.jfif"
export default function Home()
{
    return(
        <div>
            <h1 style={{color:"red",textAlign:"center"}}>
                Welcome to PRODUCT page
            </h1>
            <img src={P2} style={{display:"block",margin:"0 auto",height:"500px",width:"800px"}} alt="Home"/>
        </div>
    )
}