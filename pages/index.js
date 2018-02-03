import Header from '../components/Header.js'
import SectionOne from '../components/SectionOne.js'
import MainCss from '../components/styles-jsx/main_css.js'
import SectionTours from '../components/SectionTours.js'
import Head from 'next/head'
import Footer from "../components/sub-components/Footer.js"
import Link from 'next/link';
  
export default () => (
  <div >
    <Head>
      <title>Rio danta | Hostel rio danta app</title>
      <meta charSet='utf-8' />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Aplicacion para reserva de habitaciones y tours en linea" />
     
    </Head>
    
    
    <MainCss/>
    
    <Header 
      title="Hostel Río Danta "
      subtitle="Hospedaje y Tours En El Mismo Lugar A Un Precio Accesible"
      btntitle="Habitaciones"
      classRef="#header"
    
    />
    <SectionOne/>
    
     {/* Third */}
    <section id="second" className="main">
    <header>
      <div className="container">
        <h2>Naturaleza y Confort en un Mismo Lugar</h2>
        <p>Bienvenidos a la Fortuna, donde podrás encontar diferentes tipos de actividades,<br />
        para poder realizar para compartir con su familia de una manera diferente<br />
        poder descansar en un lugar con las brisas de la naturaleza y con el relajante sonido de las aguas del rio .</p>
      </div>
    </header>
    <div className="content dark style2">
      <div className="container">
        <div className="row">
          <div className="u4 u12-narrow">
            <section>
              <h3>Tours</h3>
              <p>
              Si deseas pasar sus vacaciones en un lugar lleno de tranquilidad y naturaleza te recomendamos visitarnos en nuestro Hostel Rio Danta, 
              donde podrás pasar vacaciones en un lugar lleno de tranquilidad y naturaleza, 
              donde podrás encontrar los mejores tours a los precios más accesibles, si reservas habitaciones + tour vas a recibir descuentos.</p>
              
            </section>
          </div>
          <div className="u8 u12-narrow">
            <div className="row">
              <div className="u4"><a href="#" className="image fit"><img src="static/images/canopy.jpg" height="150px" width="135px" /></a></div>
              <div className="u4"><a href="#" className="image fit"><img src="static/images/tabacon1.jpg" height="150px" width="135px" /></a></div>
              <div className="u4"><a href="#" className="image fit"><img src="static/images/ranacristal.jpg" height="150px" width="135px" /></a></div>
              <div className="u4"><a href="#" className="image fit"><img src="static/images/baldi.jpg" height="150px" width="135px" /></a></div>
              <div className="u4"><a href="#" className="image fit"><img src="static/images/flyboard.jpg" height="150px" width="135px" /></a></div>
              <div className="u4"><a href="#" className="image fit"><img src="static/images/celeste.jpg" height="150px" width="135px" /></a></div>
              <div className="u4"><a href="#" className="image fit"><img src="static/images/ecotermales.jpg" height="150px" width="135px" /></a></div>
              <div className="u4"><a href="#" className="image fit"><img src="static/images/atv.jpg" height="150px" width="135px"/></a></div>
              <div className="u4"><a href="#" className="image fit"><img src="static/images/rafting.jpg" height="150px" width="135px" /></a></div>
            </div>
          
          </div>
          
        </div>
       
        <Link href="/tours">
             <a class="button">Ver Más</a>
             
            
          </Link>
          
    </div>    
              
      </div>
      
  </section>
    
    {/* Fourth */}
    <section id="fourth" className="main">
      <header>
        <div className="container">
          <h2>Contacto</h2>
          <p>Escribenos para obtener los mejores precios y reservar los mejores tours<br/> 
          Si lo haces desde nuestra pagina podras aprovechar los mejores descuentos<br/>
          Cualquier consulta estamos para servirles.</p>
        </div>
              <footer>
                <a href="https://hotels.cloudbeds.com/reservation/Earuuo" className="button scrolly">Reservaciones</a>
              </footer>
      </header>
      <div className="content style4 featured">
        <div className="container percent-75">
          <form method="post" action="#">
            <div className="row percent-50">
              <div className="u6 u12-mobile"><input type="text" placeholder="Nombre" /></div>
              <div className="u6 u12-mobile"><input type="text" placeholder="Correo" /></div>
            </div>
            <div className="row percent-50">
              <div className="u12"><textarea name="message" placeholder="Mensaje" defaultValue={""} /></div>
            </div>
            <div className="row">
              <div className="u12">
                <ul className="actions">
                  <li><input type="reset" className="button" defaultValue="Enviar Mensaje" /></li>
                  <li><input type="reset" className="button alt" defaultValue="Borrar Texto" /></li>
                </ul>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
    {/* Footer */}
  

    <Footer/>
    {/* Scripts */}
    <script src="/static/jquery.min.js"></script>
			<script src="/static/jquery.scrolly.min.js"></script>
			<script src="/static/skel.min.js"></script>
      <script src="/static/util.js"></script>
      <script src="/static/main.js"></script>
</div>
    
)
