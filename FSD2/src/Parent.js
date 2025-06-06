import Child from "./Child"
function Parent(){
    var n="ABC"
    return(
        <div>
            <Child name="xyz" age="20"/>
            <Child name={n} age="19"/>
        </div>
    )
}
export default Parent;