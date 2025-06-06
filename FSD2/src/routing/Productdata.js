function Productdata (props){
    return(<>
    {
        props.data.filter((P)=>P.price<=3000).map((P)=>{
            return (
                <div key={P.id}>
                    <img src={P.image} alt={P.name} height="300" width="300"/>
                    <h1>{P.name}</h1>
                    <h3>{P.price}</h3>
                </div>
            )
        })
    }</>)
} export default Productdata