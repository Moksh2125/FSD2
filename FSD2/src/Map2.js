function Map2()
{
    var arr=["a","g","b","c","h","o"]
    return(<>
    {
        arr.map((v,i)=>{
            return <h3 key={i}>Uppercase of {v}: {v.toUpperCase()}</h3>
        })
    }
    </>)
}
export default Map2;