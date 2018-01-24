
//import ToursData from '../data/ToursData.js'
import TourItem from './sub-components/TourItem.js'
const ToursData=[
    {
        "title":"Sky Adventures",
        "url": "static/image/gif/canopy_Sky.mp4"
    },
    {
        "title":"Flyboard Arenal Lake",
        "url": "static/images/gif/fly_board.mp4"
    },
    {
        "title":"Sky Adventures",
        "url": "static/image/gif/canopy_Sky.mp4"
    },
    {
        "title":"Sky Adventures",
        "url": "static/image/gif/canopy_Sky.mp4"
    },
    {
        "title":"Sky Adventures",
        "url": "static/image/gif/canopy_Sky.mp4"
    }
]

const ToursInfo = ()=>(
  <section id="second" className="main">
    <header>
      <div className="container">
        <h2>Promociones y Tours</h2>
        <p>Si deseas hacer las mejores actividades que brinda la Fortuna de San Carlos, ingresa para ver videos de las diferentes actividades, si deseas recibir los mejores precios solo debes escribirnos en breve te brindaremos la informacion que deseas.</p>
      </div>
    </header>
    <div className="content dark style2">
      <div className="container">
        <div className="12u 12u(narrow)">
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