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
    "description": ["Caminata al volcan ", "Observatorio", "Lago Arenal", "Aguas termales "],
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
    "description": ["Caminata al volcan ", "Observatorio", "Visita al lago Arenal", "Aguas termales ", "Catarata 25mts ", "Almuerzo"],
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
    "description": ["Transporte ", "Guia", "Duracion: 2.5hrs", "Almuerzo", "Aventura extrema "],
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
    "adult": 85,
    "adultcomision": 20,
    "adultneto": 25,
    "child": 45,
    "childcomision": 20,
    "childneto": 25,
    "company": "Sky Adventures",
    "description": ["Transporte ", "Guia", "Duracion: 2.5hrs", "Almuerzo", "Aventura extrema "],
    "id": 89,
    "title": "Fly Board",
    "tourist": 113,
    "url": "https://thumbnails.trvl-media.com/qZ8LZputnx8u8543a1C6yx7WmlY=/cdn.lemediavault.com/images/5cf6df08b38251f528dbc838198e4d94.jpeg",
    "touristchild": 113,
    "touristchildcomision": 34,
    "touristchildneto": 79,
    "touristcomision": 34,
    "touristneto": 79
  },
  {
  "adult": 45,
    "adultcomision": 20,
    "adultneto": 25,
    "child": 45,
    "childcomision": 20,
    "childneto": 25,
    "company": "Baldi",
    "description": ["HotSprigs ", "Almuerzo Buffet", "Duracion: 10am-10pm"],
    "id": 89,
    "title": "Baldi #1",
    "tourist": 113,
    "url": "http://www.colypro.com/ee_uploads/centros_recreo/BaldiWeb36.jpg",
    "touristchild": 113,
    "touristchildcomision": 34,
    "touristchildneto": 79,
    "touristcomision": 34,
    "touristneto": 79
  },
  {
  "adult": 55,
    "adultcomision": 20,
    "adultneto": 25,
    "child": 45,
    "childcomision": 20,
    "childneto": 25,
    "company": "Baldi",
    "description": ["HotSprigs ", "Almuerzo Buffet","Cena Buffet", "Duracion: 10am-10pm"],
    "id": 89,
    "title": "Baldi #2",
    "tourist": 113,
    "url": "http://www.colypro.com/ee_uploads/centros_recreo/BaldiWeb36.jpg",
    "touristchild": 113,
    "touristchildcomision": 34,
    "touristchildneto": 79,
    "touristcomision": 34,
    "touristneto": 79
  },
  
  {
  "adult": 60,
    "adultcomision": 20,
    "adultneto": 25,
    "child": 45,
    "childcomision": 20,
    "childneto": 25,
    "company": "Baldi",
    "description": ["Rio Balsa ", "Almuerzo ","Snack (frutas)", "Salida: 9am"],
    "id": 89,
    "title": " Rafting 2 y 3",
    "tourist": 113,
    "url": "https://media-cdn.tripadvisor.com/media/photo-s/0d/8b/f1/96/arenal-rafting-company.jpg",
    "touristchild": 113,
    "touristchildcomision": 34,
    "touristchildneto": 79,
    "touristcomision": 34,
    "touristneto": 79
  },
  {
  "adult": 70,
    "adultcomision": 20,
    "adultneto": 25,
    "child": 45,
    "childcomision": 20,
    "childneto": 25,
    "company": "Arenal Rafting",
    "description": ["Rio Sarapiqui ", "Almuerzo ","Snack (frutas)", "Salida: 9am"],
    "id": 89,
    "title": " Rafting 3 y 4",
    "tourist": 113,
    "url": "https://media-cdn.tripadvisor.com/media/photo-s/06/ce/77/1e/hacienda-pozo-azul.jpg",
    "touristchild": 113,
    "touristchildcomision": 34,
    "touristchildneto": 79,
    "touristcomision": 34,
    "touristneto": 79
  },
  {
  "adult": 50,
    "adultcomision": 20,
    "adultneto": 25,
    "child": 45,
    "childcomision": 20,
    "childneto": 25,
    "company": "Go Adventures",
    "description": ["9 cables canopy", "Rápel","Malekus", "Termales"],
    "id": 89,
    "title": "Paquete Aventura",
    "tourist": 113,
    "url": "http://www.fortunawelcome.com/images/tours/arenal-canyoning-tour/arenal-canyoning-tour-4.jpg",
    "touristchild": 113,
    "touristchildcomision": 34,
    "touristchildneto": 79,
    "touristcomision": 34,
    "touristneto": 79
  },
  {
  "adult": 50,
    "adultcomision": 20,
    "adultneto": 25,
    "child": 45,
    "childcomision": 20,
    "childneto": 25,
    "company": "Go Adventures",
    "description": ["Tubing","Malekus", "Termales"],
    "id": 89,
    "title": "Paquete Aventura 2",
    "tourist": 113,
    "url": "https://i.ytimg.com/vi/R52_G-nhRyU/maxresdefault.jpg",
    "touristchild": 113,
    "touristchildcomision": 34,
    "touristchildneto": 79,
    "touristcomision": 34,
    "touristneto": 79
  },
  {
  "adult": 60,
    "adultcomision": 20,
    "adultneto": 25,
    "child": 45,
    "childcomision": 20,
    "childneto": 25,
    "company": "Go Adventures",
    "description": ["Cabalgata al Volcán", "Termales"],
    "id": 89,
    "title": "Paquete Volcan Arenal",
    "tourist": 113,
    "url": "https://image.jimcdn.com/app/cms/image/transf/none/path/s9d7e71e92f4b8590/image/i705952c00e9a2602/version/1442009737/image.jpg",
    "touristchild": 113,
    "touristchildcomision": 34,
    "touristchildneto": 79,
    "touristcomision": 34,
    "touristneto": 79
  },
  {
  "adult": 35,
    "adultcomision": 20,
    "adultneto": 25,
    "child": 45,
    "childcomision": 20,
    "childneto": 25,
    "company": "Go Adventures",
    "description": ["Cabalgata al Volcán"],
    "id": 89,
    "title": "Cabalgata al Volcán",
    "tourist": 113,
    "url": "http://www.fortunawelcome.com/images/tours/arenal-volcano-horseback-riding-tour/arenal-volcano-horseback-riding-tour-3.jpg",
    "touristchild": 113,
    "touristchildcomision": 34,
    "touristchildneto": 79,
    "touristcomision": 34,
    "touristneto": 79
  }
  ,
  {
  "adult": 100,
    "adultcomision": 20,
    "adultneto": 25,
    "child": 45,
    "childcomision": 20,
    "childneto": 25,
    "company": "Go Adventures",
    "description": ["Transporte","Almuezo","Entrada al parque","Guia"],
    "id": 89,
    "title": "Rio Celeste",
    "tourist": 113,
    "url": "https://i.ytimg.com/vi/U1hMe18CiQo/maxresdefault.jpg",
    "touristchild": 113,
    "touristchildcomision": 34,
    "touristchildneto": 79,
    "touristcomision": 34,
    "touristneto": 79
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
