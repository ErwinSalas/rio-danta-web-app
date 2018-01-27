import CardImg from './CardImg.js' 
const Card = (props)=> (
    <div>
      <div className="card medium z-depth-5 " >
        <CardImg
          title={props.item.title}
          url={props.item.url}
        />
        <div className="card-content">
          <p className="black-text">{props.item.description}</p>
        </div>
        <div className="card-action">
          <a href="#">Ver Mas</a>
        </div>
      </div>
    </div>

)
export default Card