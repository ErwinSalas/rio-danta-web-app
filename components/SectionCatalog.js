import ItemStyle from './styles-jsx/card_item_css.js';
import TourItem from './sub-components/TourItem.js';
import  Link  from 'next/link';
import Nav from '../components/Nav.js'


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

const Catalog = () => (

  <section id="first" className="main">
  <Nav/>
    <ItemStyle />
    <div className="content">
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
export default Catalog