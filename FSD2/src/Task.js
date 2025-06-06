import logo from "./logo.svg"
function Task(){
    var a=3000;
    var s={color:"red",fontSize:"30px"}
    return(<><h1 style={{color:"blue",backgroundColor:"yellow"}}>Welcome Students</h1>
    <p style={s} className="test">Hello</p>
    <img src={logo} width="300" height="300"/>
    <img src="logo192.png" width="300" height="300"/>
    <h3>Price is: {a}</h3></>)
}
export default Task;