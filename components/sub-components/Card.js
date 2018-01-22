import ReactPlayer from 'react-player'
import ItemStyle from '../styles-jsx/touch_item_css.js'
const Card = (props)=> (
    <div>
        <ItemStyle/>
      <div className="card">
        <div className="card-image">
          <ReactPlayer url={props.item.url}  />
          <span className="card-title">{props.title}</span>
        </div>
        <div className="card-content">
          <p>{props.content}</p>
        </div>
        <div className="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>

)
export default Card