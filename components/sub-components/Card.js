
const Card = (props)=> (
    <div>
      <div className="card medium">
        <div className="card-image">
          <img src={props.item.url}/>
          <span className="card-title">{props.item.title}</span>
        </div>
        <div className="card-content">
          <p className="paragraph">{props.item.description}</p>
        </div>
        <div className="card-action">
          <a href="#">Ver Mas</a>
        </div>
      </div>
    </div>

)
export default Card