
//import ToursData from '../data/ToursData.js'
import ItemStyle from './styles-jsx/card_item_css.js';
import TourItem from './sub-components/TourItem.js';
import CardImg from './sub-components/CardImg.js'

import Link from 'next/link';
import Nav from '../components/Nav.js'


const ToursData = [
  {
    "title": "Baldi hot springs ",
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
                  <div className="u4 u12-mobile">
                    <div className="video-responsive  ">
                      <div className="card small">
                        <CardImg url={tour.url} title={tour.title} />
                        <div className="card-action">
                          <a href="#">Ver Mas</a>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
            <div className="row">
              <footer>
                <Link href="/tours">
                  <a href="#second" className="button scrolly">Nuestros Tours &amp; Descuentos</a>
                </Link>
              </footer>

            </div>


          </div>

        </div>
      </div>
    </div>
  </section>

)
export default ToursInfo