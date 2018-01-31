
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
      <title>Hostel Rio Danta App</title>
      <meta charSet='utf-8' />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Aplicacion para reserva de habitaciones y tours en linea" />
     
    </Head>
       <MainCss/>

       <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
       <div class="fixed-action-btn horizontal">
       <Link href="/">
       <a class="btn-floating btn-large color-danton">
         <i class="large material-icons">home</i>
       </a>
       </Link>
   

    <ul>
      <li><a class="btn-floating red"><i class="material-icons">insert_chart</i></a></li>
      <li><a class="btn-floating yellow darken-1"><i class="material-icons">format_quote</i></a></li>
      <li><a class="btn-floating green"><i class="material-icons">publish</i></a></li>
      <li><a class="btn-floating blue"><i class="material-icons">attach_file</i></a></li>
    </ul>
  </div>
    
 
    
     {/* Third */}
    <section id="second" className="main">
    <div className="content dark style2">
      <div className="container">
        <div className="row">
          <div className="u4 u12-narrow">
            <section>
              <h3>Habitación Estandar</h3>
              <p>Servicios: Desayuno incluido, TV por cable, Internet inalámbrico, Agua caliente, Parqueo con camaras de seguridad, Ventilador de pie.</p>

              
            </section>
            <footer>
                <a href="https://hotels.cloudbeds.com/reservation/Earuuo" className="button scrolly">Reservaciones</a>
              </footer>
          </div>
          <div className="u8 u12-narrow">
            <div className="row">
              <div className="u4"><a href="#" className="image fit"><img src="static/images/estandar6.jpg" alt /></a></div>
              <div className="u4"><a href="#" className="image fit"><img src="static/images/estandar4.jpg" alt /></a></div>
              <div className="u4"><a href="#" className="image fit"><img src="static/images/estandarinterior.jpg" alt /></a></div>
              <div className="u4"><a href="#" className="image fit"><img src="static/images/frenteestandar2.jpg" alt /></a></div>
              <div className="u4"><a href="#" className="image fit"><img src="static/images/estandar1.jpg" alt /></a></div>
              <div className="u4"><a href="#" className="image fit"><img src="static/images/estandarcama.jpg" alt /></a></div>
              <div className="u4"><a href="#" className="image fit"><img src="static/images/estandar5.jpg" alt /></a></div>
              <div className="u4"><a href="#" className="image fit"><img src="static/images/estandar2.jpg" alt /></a></div>
              <div className="u4"><a href="#" className="image fit"><img src="static/images/frenteestandar.jpg" alt /></a></div>
            </div>
          
          </div>
          
        </div>
              
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
