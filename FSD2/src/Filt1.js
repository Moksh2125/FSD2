function Filt1(){
    const arr=[5,3,4,1,7,4,8,3,2]
    return(<>{
    arr.filter((v)=>v>=4).map((v,i)=>{
            return <h2 key={i}>{v} * 3 = {v*3}</h2>
    })
    }
    </>)
}
export default Filt1