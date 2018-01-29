
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
              <h3>Habitaciones Compartidasl</h3>
                                <p>Servicios: Desayuno incluido, TV por cable, Internet inalambrico, Agua caliente, Parqueo con camaras de seguridad, Ventilador de pie.</p>

            </section>
            <footer>
                <a href="https://hotels.cloudbeds.com/reservation/Earuuo" className="button scrolly">Reservaciones</a>
              </footer>
          </div>
          <div className="u8 u12-narrow">
            <div className="row">
              <div className="u4"><a href="#" className="image fit"><img src="static/images/camarotes2.jpg" alt /></a></div>
              <div className="u4"><a href="#" className="image fit"><img src="static/images/compartido2.jpg" alt /></a></div>
              <div className="u4"><a href="#" className="image fit"><img src="static/images/compartidos1.jpg" alt /></a></div>
              <div className="u4"><a href="#" className="image fit"><img src="static/images/pool.jpg" alt /></a></div>
              <div className="u4"><a href="#" className="image fit"><img src="static/images/amaca.jpg" alt /></a></div>
              <div className="u4"><a href="#" className="image fit"><img src="static/images/iguana.jpg" alt /></a></div>
              </div>
          
          </div>
          
        </div>
              <footer>
                <a href="https://hotels.cloudbeds.com/reservation/Earuuo" className="button scrolly">Reservaciones</a>
              </footer>
      </div>
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
    <script src="/static/jquery.min.js"></script>
			<script src="/static/jquery.scrolly.min.js"></script>
			<script src="/static/skel.min.js"></script>
      <script src="/static/util.js"></script>
      <script src="/static/main.js"></script>
</div>
    
)
