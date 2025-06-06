import "./MyApp.css"
function ProductCard(props){
    return(<>
{
    props.data.map((p,i)=>{
        return(<div className="t2" key={p.id}>
            <img src={p.image} height="200" width="200"/>
            <h2 className="t1">{p.title}</h2>
            <h3 style={{color:"red"}}>{p.price}</h3>
            <p className="r1">{p.rating}</p>
        </div>)
    })
}
    </>)
}
export default ProductCard