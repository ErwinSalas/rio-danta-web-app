import ItemStyle from './styles-jsx/card_item_css.js';
import TourItem from './sub-components/TourItem.js';
import Link from 'next/link';
import Nav from '../components/Nav.js'
import React, { Component } from 'react';
import Tabs from './sub-components/Tabs.js';


const ToursData = [
  {
    "adult": 45,
    "adultcomision": 20,
    "adultneto": 25,
    "child": 45,
    "childcomision": 20,
    "childneto": 25,
    "company": "Jungle Tour",
    "description": ["Caminata al volcan ", "Entrada al observatorio", "Visita al lago Arenal", "Rio de aguas termales "],
    "id": 89,
    "title": "Volcan & Termales",
    "tourist": 113,
    "url": "https://www.nacion.com/resizer/YYI9EWU1LCtHXs2J1p02Gz-BV1E=/600x0/center/middle/filters:quality(100)/arc-anglerfish-arc2-prod-gruponacion.s3.amazonaws.com/public/ZXBYNEECDJGH5PH4RFHFG5Q6G4.jpg",
    "touristchild": 113,
    "touristchildcomision": 34,
    "touristchildneto": 79,
    "touristcomision": 34,
    "touristneto": 79
  },
  {
    "adult": 65,
    "adultcomision": 20,
    "adultneto": 25,
    "child": 35,
    "childcomision": 20,
    "childneto": 25,
    "company": "Jungle Tour",
    "description": ["Caminata al volcan ", "Entrada al observatorio", "Visita al lago Arenal", "Rio de aguas termales ", "Visita a la catarata 25mts ", "Almuerzo"],
    "id": 89,
    "title": "Arenal & Chato",
    "tourist": 113,
    "url": "https://i.pinimg.com/736x/f4/1d/e8/f41de8ed937bda896a8e54d101eceabe--quetzaltenango-laguna.jpg",
    "touristchild": 113,
    "touristchildcomision": 34,
    "touristchildneto": 79,
    "touristcomision": 34,
    "touristneto": 79
  },
  {
    "adult": 85,
    "adultcomision": 20,
    "adultneto": 25,
    "child": 45,
    "childcomision": 20,
    "childneto": 25,
    "company": "La pradera",
    "description": ["Transporte ", "Guia", "Duracion: 2.5hrs", "Almuerzo", "Aventura extrema en las faldas del Volcan"],
    "id": 89,
    "title": "ATV Arenal Tour",
    "tourist": 113,
    "url": "https://media-cdn.tripadvisor.com/media/photo-s/01/71/9d/a3/muy-bueno.jpg",
    "touristchild": 113,
    "touristchildcomision": 34,
    "touristchildneto": 79,
    "touristcomision": 34,
    "touristneto": 79
  },
  {
    "title": "Baldi hot springs ",
    "url": "static/images/baldi.jpg",
    "description": []
  },
  {

    "url": "static/images/atv.jpg",
    "description":[ "imply dummy text of the printing and typesetting industry since the 1500s, when an unknown printer"]
  },
  {
    "title": "Canopy tour",
    "url": "static/images/canopy.jpg",
    "description":[ "imply dummy text of the printing and typesetting industry since the 1500s, when an unknown printer"]
  },
  {
    "title": "Rio Celeste tour",
    "url": "static/images/celeste.jpg",
    "description":[ "imply dummy text of the printing and typesetting industry since the 1500s, when an unknown printer"]
  },
  {
    "title": "Kalambu hot springs",
    "url": "static/images/kalambu.jpg",
    "description":[ "imply dummy text of the printing and typesetting industry since the 1500s, when an unknown printer"]

  }
]


class Catalog extends Component {
  constructor(props) {
    super();

    this.state = {
      data: ToursData
    };
  }
  searchBy = (input) => {
    this.setState(
      {
        filter: input.target.value
      });
  }
  componentWillMount = () => {
    if (this.filter == null | this.filter == "") {
      this.setState({
        data: ToursData
      });

    }


  }

  render() {

    return (

      <section id="first" className="main">
        <style jsx global>{`
          nav.nav-extended .nav-wrapper {
            min-height: 56px;
            height: auto;
          }
          @media only screen and (min-width: 601px) {
            nav.nav-extended .nav-wrapper {
                min-height: 64px;
            }
            nav, nav .nav-wrapper i, nav a.button-collapse, nav a.button-collapse i {
            height: 64px;
            line-height: 64px;
          }
          }
        `}</style>
        <nav class="nav-extended">
          <div class="nav-wrapper">
            <Nav />
            <Tabs />
          </div>
        </nav>
        <ItemStyle />
        <div className="content">
          <div className="container">
            <div className="u12 u12-narrow">
              <div className="row">
                {

                  ToursData.map((tour) => {
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

    );
  }
}

export default Catalog;
