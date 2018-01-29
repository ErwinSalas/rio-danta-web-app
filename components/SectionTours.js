
//import ToursData from '../data/ToursData.js'
import ItemStyle from './styles-jsx/card_item_css.js';
import TourItem from './sub-components/TourItem.js';
import CardImg from './sub-components/CardImg.js'

import Link from 'next/link';
import Nav from '../components/Nav.js'


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
    "adult": 60,
    "adultcomision": 20,
    "adultneto": 25,
    "child": 45,
    "childcomision": 20,
    "childneto": 25,
    "company": "Baldi",
    "description": ["Rio Balsa ", "Almuerzo ", "Snack (frutas)", "Salida: 9am"],
    "id": 89,
    "title": " Rafting 2 y 3",
    "tourist": 113,
    "url": "https://media-cdn.tripadvisor.com/media/photo-s/0d/8b/f1/96/arenal-rafting-company.jpg",
    "touristchild": 113,
    "touristchildcomision": 34,
    "touristchildneto": 79,
    "touristcomision": 34,
    "touristneto": 79
  }
  ,
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
    "adult": 50,
    "adultcomision": 20,
    "adultneto": 25,
    "child": 45,
    "childcomision": 20,
    "childneto": 25,
    "company": "Go Adventures",
    "description": ["9 cables canopy", "Rápel", "Malekus", "Termales"],
    "id": 89,
    "title": "Paquete Aventura",
    "tourist": 113,
    "url": "http://www.fortunawelcome.com/images/tours/arenal-canyoning-tour/arenal-canyoning-tour-4.jpg",
    "touristchild": 113,
    "touristchildcomision": 34,
    "touristchildneto": 79,
    "touristcomision": 34,
    "touristneto": 79
  }
  ,
  


]
const ToursInfo = () => (

  <section id="second" className="main">
    <ItemStyle />

    <header>
      <div className="container">
        <h2>Promocione Tours</h2>
        <p>Si desea realizar las mejores actividades que brinda la Fortuna de San Carlos, Podes ingresar a nuestra seccion de tours para obtener informacion sobre nuestros paquetes y tarifas especiales  .</p>
      </div>
    </header>
    <div className="content dark style2">
      <div className="container">
        <div className="row">
          <div className="u8 u12-narrow">
            <div className="row">
              {
                ToursData.map(tour => {
                  return (
                    <div className="u4">
                    <a href="#" className="image fit">
                   
                        <div className="image fit">
                          <img src={tour.url} />
                          <span className="p-absolute">{tour.title}</span>
                        </div>
      
                    </a>
                    </div>

                  )
                })
              }
            </div>

          </div>
          <div className="u4 u12-narrow">
            <section>
              <h3>Aventura, Confort, Naturaleza y mucho más..</h3>
              <p>
                Contamos con gran variedad de paquetes turisticos y actividades a disposicion de nuestros usuarios y clientes,
                  a un precio accesible y con execelente servicio.<br />
                
                Para mas informacion acerca de los toures visita nuestra seccion de catalogo en linea
                  </p>
                <Link href="/tours">
        <a class="button">
          Ver más
        </a>
      </Link>

            </section>

          </div>
        </div>

      </div>
      <footer>
      
       </footer>
    </div>


  </section>

)
export default ToursInfo