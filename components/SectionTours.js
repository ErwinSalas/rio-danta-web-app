
//import ToursData from '../data/ToursData.js'
import ItemStyle from './styles-jsx/card_item_css.js'
import TourItem from './sub-components/TourItem.js'
const ToursData=[
    {
        "title":"Baldi hot springs",
        "url": "static/images/baldi.jpg",
        "description": "simply dummy text of the printing and typesetting industry.since the 1500s, when an unknown printer "
    },
    {
        "title":"ATV arenal tour",
        "url": "static/images/atv.jpg",
        "description": "s simply dummy text of the printing and typesetting industry since the 1500s, when an unknown printer"
    },
    {
        "title":"Canopy tour",
        "url": "static/images/canopy.jpg",
        "description": "s simply dummy text of the printing and typesetting industry since the 1500s, when an unknown printer"
    },
    {
        "title":"Rio Celeste tour",
        "url": "static/images/celeste.jpg",
        "description": "s simply dummy text of the printing and typesetting industry since the 1500s, when an unknown printer"
    },
    {
        "title":"Kalambu hot springs",
        "url": "static/images/kalambu.jpg",
        "description": "s simply dummy text of the printing and typesetting industry since the 1500s, when an unknown printer"

    }
]

const ToursInfo = ()=>(

  <section id="second" className="main">
  <ItemStyle/>
  
    <header>
      <div className="container">
        <h2>Promociones y Tours</h2>
        <p>Si deseas hacer las mejores actividades que brinda la Fortuna de San Carlos, ingresa para ver videos de las diferentes actividades, si deseas recibir los mejores precios solo debes escribirnos en breve te brindaremos la informacion que deseas.</p>
      </div>
    </header>
    <div className="content dark style2">
      <div className="container">
        <div className="u12 u12-narrow">
        <div className="row">
          {
            ToursData.map(tour =>{
              return(
                <TourItem tour={tour}/>
              )
             })
          }
        </div>
      </div>
    </div>
  </div>
</section>
      
)
export default ToursInfo