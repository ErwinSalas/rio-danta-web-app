const CardImg = (props)=> (
    <div className="card-image ">
    <a class="btn-floating p-absolute "><i className="pad-5" >${props.price}</i></a>
        <img src={props.url}/>
        <span className="card-title">{props.title}</span>
    </div>

)
export default CardImg