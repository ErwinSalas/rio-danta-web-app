
//import ToursData from '../data/ToursData.js'
import ItemStyle from './styles-jsx/card_item_css.js';
import TourItem from './sub-components/TourItem.js';
import  Link  from 'next/link';

const ToursData = [
  {
    "title": "Baldi hot springs",
    "url": "static/images/baldi.jpg",
    "description": "simply dummy text of the printing and typesetting industry.since the 1500s, when an unknown printer "
  },
  {
    "title": "ATV arenal tour",
    "url": "static/images/atv.jpg",
    "description": "imply dummy text of the printing and typesetting industry since the 1500s, when an unknown printer"
  },
  {
    "title": "Canopy tour",
    "url": "static/images/canopy.jpg",
    "description": "imply dummy text of the printing and typesetting industry since the 1500s, when an unknown printer"
  },
  {
    "title": "Rio Celeste tour",
    "url": "static/images/celeste.jpg",
    "description": "imply dummy text of the printing and typesetting industry since the 1500s, when an unknown printer"
  },
  {
    "title": "Kalambu hot springs",
    "url": "static/images/kalambu.jpg",
    "description": "imply dummy text of the printing and typesetting industry since the 1500s, when an unknown printer"

  }
]

const ToursInfo = () => (

  <section id="second" className="main">
    <ItemStyle />

    <header>
      <div className="container">
        <h2>Promocione Tours</h2>
        <p>Si deseaacer laejorectividadeue brinda la Fortuna de San Carlos, ingresa para ver videoe laiferentectividades, si deseaecibir loejorerecioolo debescribirnon breve te brindaremoa informacion que deseas.</p>
      </div>
    </header>
    <div className="content dark style2">
      <div className="container">
        <div className="u12 u12-narrow">
          <div className="row">
            {
              ToursData.map(tour => {
                return (
                  <TourItem tour={tour} />
                )
              })
            }
            
            <Link href="/tours">
            <a>Ver Catalogo</a>
          </Link>
          </div>
        </div>
      </div>
    </div>
  </section>

)
export default ToursInfo