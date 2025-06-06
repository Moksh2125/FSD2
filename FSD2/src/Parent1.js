import Child1 from "./Child1"
function Parent(){
    var t={name:"ABC",age:20}
    return(
        <div>
            <Child1 data={t}/>
        </div>
    )
}
export default Parent;