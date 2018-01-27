const CardImg = (props)=> (
    <div className="card-image ">
        <img src={props.url}/>
        <span className="card-title">{props.title}</span>
    </div>

)
export default CardImg