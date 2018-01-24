import ItemStyle from '../styles-jsx/card_item_css.js'
const Card = (props)=> (
    <div>
        <ItemStyle/>
      <div className="card small">
        <div className="card-image">
          <img src={props.item.url}/>
          <span className="card-title">{props.item.title}</span>
        </div>
        <div className="card-content">
          <p>{props.item.content}</p>
        </div>
        <div className="card-action">
          <a href="#">Ver Mas</a>
        </div>
      </div>
    </div>

)
export default Card