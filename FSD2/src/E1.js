function E1(){
    return (
    <>
    <textarea id="ta" onChange={charcount}/>
    <button onClick={display}>Submit</button>
    <h1 id="count">Characters:0</h1>
    </>)
}
export default E1
function charcount(){
    var d1=document.getElementById("ta").value
    document.getElementById("count").innerHTML="Characters "+d1.length
}
function display(){
    var d2=document.getElementById("ta").value
    alert(d2)
}