function Print(){
    return(<>
    <h1>Current Date and Time:</h1>
    </>)
}
export default function Task2(){
    return(<>
        <Print/>
        <h2>Date:{new Date().toLocaleDateString()}</h2>
        <h2>Time:{new Date().toLocaleTimeString()}</h2>
        </>)
}