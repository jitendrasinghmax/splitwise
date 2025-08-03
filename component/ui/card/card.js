export default function(props){
    return (<>
        <div className={`card-div ${props.className}`}>{props.children}</div>
    </>)
}