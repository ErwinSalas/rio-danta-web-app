import CardImg from './CardImg.js'
const Card = (props) => (
  <div>
  
        
    <div className="card small z-depth-5 " >
    
      <CardImg
        title={props.item.title}
        url={props.item.url}
        price={props.item.adult}
      />
      <div className="card-content ">
        <div className="container"></div>
        <div className="row no-pad-row">
          <div className="u5 u12-mobile no-pad-top">
            <a className="black-text-content-title title-center">
              Actividades Servicios Caracteristicas
            </a>
          </div>
          <div className="u7 u12-mobile no-pad-top-list">
            <ul className="black-text-content">
              {
                props.item.description.map((feature) => {
                  return (
                    <li className="li-item-left">
                      * {feature}
                    </li>
                  )
                })
              }
            </ul>

          </div>
          </div>
        
      </div>
    </div>
  </div>
    )
export default Card