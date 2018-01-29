
import Header from '../components/Header.js'
import SectionOne from '../components/SectionOne.js'
import MainCss from '../components/styles-jsx/main_css.js'
import SectionTours from '../components/SectionTours.js'
import Head from 'next/head'

  
export default () => (
  <div >
    <Head>
      <title>Hostel Rio Danta App</title>
      <meta charSet='utf-8' />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Aplicacion para reserva de habitaciones y tours en linea" />
     
    </Head>
       <MainCss/>
    <div class="fixed-action-btn horizontal">
    <a class="btn-floating btn-large color-danton">
      <i class="large material-icons">home</i>
    </a>
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
              <h3>Habitacion Estandar</h3>
                                <p>Servicios: Desayuno incluido, TV por cable, Internet inalambrico, Agua caliente, Parqueo con camaras de seguridad, Ventilador de pie.</p>

              
            </section>
            <footer>
                <a href="https://hotels.cloudbeds.com/reservation/Earuuo" className="button scrolly">Reservaciones</a>
              </footer>
          </div>
          <div className="u8 u12-narrow">
            <div className="row">
              <div className="u4"><a href="#" className="image fit"><img src="static/images/estandar2.jpg" alt /></a></div>
              <div className="u4"><a href="#" className="image fit"><img src="static/images/estandar5.jpg" alt /></a></div>
              <div className="u4"><a href="#" className="image fit"><img src="static/images/estandarcama.jpg" alt /></a></div>
              <div className="u4"><a href="#" className="image fit"><img src="static/images/estandarcama2.jpg" alt /></a></div>
              <div className="u4"><a href="#" className="image fit"><img src="static/images/estandarinterior.jpg" alt /></a></div>
              <div className="u4"><a href="#" className="image fit"><img src="static/images/fenteestandar.jpg" alt /></a></div>
              <div className="u4"><a href="#" className="image fit"><img src="static/images/frenteestandar.jpg" alt /></a></div>
              <div className="u4"><a href="#" className="image fit"><img src="static/images/estandar3.jpg" alt /></a></div>
              <div className="u4"><a href="#" className="image fit"><img src="static/images/estandar2.jpg" alt /></a></div>
            </div>
          
          </div>
          
        </div>
              <footer>
                <a href="https://hotels.cloudbeds.com/reservation/Earuuo" className="button scrolly">Reservaciones</a>
              </footer>
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
                  <li><input type="submit" className="button" defaultValue="Enviar Mensaje" /></li>
                  <li><input type="reset" className="button alt" defaultValue="Borrar Texto" /></li>
                </ul>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
    {/* Footer */}
    <section id="footer">
      <ul className="icons">
        <li><a href="(+506) 2481-0909" className="icon fa-phone"><span className="label">Phone</span></a></li>
        <li><a href="(+506) 6095-2271" className="icon fa-whatsapp"><span className="label">Whatsapp</span></a></li>
        <li><a href="https://www.facebook.com/hotelriodanta/" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
        <li><a href="#" className="icon fa-envelope"><span className="label">Mail</span></a></li>
        <li><a href="https://www.google.co.cr/maps/place/Hostel+Rio+Danta/@10.4776373,-84.6460057,17z/data=!3m1!4b1!4m5!3m4!1s0x8fa00c869512d4c5:0x4b0322488eaafb22!8m2!3d10.477632!4d-84.643817?hl=es" className="icon fa-home"><span className="label">Home</span></a></li>
      </ul>
      <div className="copyright">
        <ul className="menu">
          <li>© Hostel Rio Danta.     Es un gusto servirle.</li><li>Nuestra Meta: Brindar Hospedaje y los mejores tours a un precio accesible</li>
        </ul>
      </div>
    </section>

    <section id="footer">
      <ul className="icons">
        <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
        <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
        <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
        <li><a href="#" className="icon fa-dribbble"><span className="label">Dribbble</span></a></li>
        <li><a href="#" className="icon fa-github"><span className="label">GitHub</span></a></li>
      </ul>
      <div className="copyright">
        <ul className="menu">
          <li>© Untitled. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
        </ul>
      </div>
    </section>
    {/* Scripts */}
    
</div>
    
)
