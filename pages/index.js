
import Header from '../components/Header.js'
import SectionOne from '../components/SectionOne.js'
import MainCss from '../components/styles-jsx/main_css.js'

export default ()=> (
        <div>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
       
        <MainCss/>
        <Header/>
        <SectionOne/>
    
        <section id="second" className="main">
          <header>
            <div className="container">
              <h2>Promociones y Tours</h2>
              <p>Si deseas hacer las mejores actividades que brinda la Fortuna de San Carlos, ingresa para ver videos de las diferentes actividades, si deseas recibir los mejores precios solo debes escribirnos en breve te brindaremos la informacion que deseas.</p>
            </div>
          </header>
          <div className="content dark style2">
            <div className="container">
              <div className="row">
                {/*	<div class="u4 u12-narrow">
								<section>
									<h3>Promociones y Tours</h3>
									<p>Si deseas conocer de las mejores actividades que se pueden realizar en la Fortuna de San Carlos, 
											te ayudaremos a encontrar los mejores tours al precio más accesible, tenemos diferentes tours de adrenalina o relajantes 
											o si deseas conocer de la flora y fauna, tenemos las mejores actividades para que disfrutes de sus vacaciones, 
											Le brindaremos los mejores servicios. Venga y disfrute de su estancia en el confort de la ciudad, 
											o si prefiere la paz y la tranquilidad le ofrecemos nuestro hospedaje en el Hostel Rio Danta al mejor precio y con las mejores actividades.</p>
									*/}
                <header>
                  <h3>Tours</h3>
                </header>
                <div className="table-wrapper">
                  <table className="default">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Tour</th>
                        <th>Description</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><video src="assets/gif/fly_board.mp4" height={100} width={100} autoPlay controls /></td>
                        <td>Fly Board</td>
                        <td>Entrada a Baldi + Almuerzo + Cena tipo Buffet</td>
                        <td>$90</td>
                      </tr>
                      <tr>
                        <td><video src="assets/gif/canopy_Sky.mp4" height={100} width={100} autoPlay controls /></td>
                        <td>Tabacon + Alimentacion</td>
                        <td>Entrada a Tabacon + Almuerzo + Cena tipo Buffet</td>
                        <td>$55</td>
                      </tr>
                      <tr>
                        <td><span className="icon fa"><img src="static/images/kalambu.jpg" height={100} width={100} /></span></td>
                        <td>Baldi + Alimentacion</td>
                        <td>Entrada a Baldi + Almuerzo + Cena tipo Buffet</td>
                        <td>$55</td>
                      </tr>
                      <tr>
                        <td><span className="icon fa"><img src="static/images/ecotermales.jpg" height={100} width={100} /></span></td>
                        <td>Baldi + Alimentacion</td>
                        <td>Entrada a Baldi + Almuerzo + Cena tipo Buffet</td>
                        <td>$55</td>
                      </tr>
                      <tr>
                        <td><span className="icon fa"><img src="static/images/atv.jpg" height={100} width={100} /></span></td>
                        <td>Baldi + Alimentacion</td>
                        <td>Entrada a Baldi + Almuerzo + Cena tipo Buffet</td>
                        <td>$55</td>
                      </tr>
                      <tr>
                        <td><span className="icon fa"><img src="static/images/rafting.jpg" height={100} width={100} /></span></td>
                        <td>Baldi + Alimentacion</td>
                        <td>Entrada a Baldi + Almuerzo + Cena tipo Buffet</td>
                        <td>$55</td>
                      </tr>
                      <tr>
                        <td><span className="icon fa"><img src="static/images/canopy.jpg" height={100} width={100} /></span></td>
                        <td>Baldi + Alimentacion</td>
                        <td>Entrada a Baldi + Almuerzo + Cena tipo Buffet</td>
                        <td>$55</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colSpan={3} />
                        <td>100.00</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
                <section>
                  <footer>
                    <a href="#third" className="button scrolly">Reservaciones</a>
                  </footer>
                  <div className="u12 u12-narrow">
                    <div className="row">
                      <video src="assets/gif/fly_board.mp4" height={150} width={150} autoPlay controls />
                      <div className="u6"><a href="#" className="image"><img src="static/images/atv.jpg" className="tour" height={150} width={150} /></a></div>
                      <div className="u6"><a href="#" className="image"><img src="static/images/baldi.jpg" className="tour" height={150} width={150} /></a></div>
                      <div className="u6"><a href="#" className="image"><img src="static/images/estandar.jpg" className="tour" height={200} width={200} /></a></div>
                      <div className="u6"><a href="#" className="image"><img src="static/images/celeste.jpg" className="tour" height={200} width={200} /></a></div>
                      <div className="u6"><a href="#" className="image"><img src="static/images/ecotermales.jpg" className="tour" height={200} width={200} /></a></div>
                      <div className="u6"><a href="#" className="image fit"><img src="static/images/tucan.jpg" className="tour" height={200} width={200} /></a></div>
                      <div className="u6"><a href="#" className="image fit"><img src="static/images/ranacristal.jpg" className="tour" height={200} width={200} /></a></div>
                      <div className="u6"><a href="#" className="image fit"><img src="static/images/rafting.jpg" className="tour" height={200} width={200} /></a></div>
                      <div className="u6"><a href="#" className="image fit"><img src="static/images/tabacon.jpg" className="tour" height={200} width={200} /></a></div>
                      <div className="u6"><a href="#" className="image fit"><img src="static/images/atv.jpg" className="tour" height={200} width={200} /></a></div>
                      <div className="u6"><a href="#" className="image fit"><img src="static/images/tucan.jpg" className="tour" height={200} width={200} /></a></div>
                      <div className="u6"><a href="#" className="image fit"><img src="static/images/canopy.jpg" className="tour" height={200} width={200} /></a></div>
                    </div>
                  </div>
                </section></div>
            </div>
          </div>
        </section>
        {/* Third */}
        <section id="third" className="main">
          <header>
            <div className="container">
              <h2>Aprovecha De Nuestros Descuentos Si Reservas Hospedaje + Tours</h2>
              <p>Gravida dis placerat lectus ante vel nunc euismod eget ornare varius gravida euismod lorem ipsum dolor sit amet consequat<br />
                feugiat. Gravida dis placerat lectus ante vel nunc euismod eget ornare varius gravida euismod lorem ipsum dolor sit amet.</p>
            </div>
          </header>
          <div className="content dark style3">
            <div className="container">
              <span className="image featured"><img src="static/images/pic07.jpg" alt /></span>
              <div className="row">
                <div className="u4 u12-narrow">
                  <h3>Diam vivamus turpis lorem sodales lectus ornare</h3>
                  <p>Gravida dis placerat lectus ante vel nunc euismod est turpis sodales. Diam
                    tempor dui lacinia eget ornare varius gravida. Gravida dis placerat lectus ante
                    vel nunc euismod est turpis sodales. Diam tempor dui lacinia accumsan vivamus
                    augue cubilia vivamus nisi eu eget ornare varius gravida euismod.  Gravida dis
                    lorem ipsum dolor placerat magna tempus feugiat.</p>
                  <p>Lectus ante vel nunc euismod est turpis sodales. Diam tempor dui lacinia
                    accumsan vivamus augue cubilia vivamus nisi eu eget ornare varius gravida dolore
                    euismod lorem ipsum dolor sit amet consequat. vivamus nisi eu eget ornare varius
                    gravida dolore euismod lorem ipsum dolor sit amet consequat. vivamus nisi eu
                    eget ornare et magna.</p>
                </div>
                <div className="u4 u12-narrow">
                  <p>Gravida dis placerat lectus ante vel nunc euismod est turpis sodales. Diam
                    tempor dui lacinia eget ornare varius gravida. Gravida dis placerat lectus ante
                    vel nunc euismod est turpis sodales. Diam tempor dui lacinia accumsan vivamus
                    augue cubilia vivamus nisi eu eget ornare varius gravida euismod.  Gravida dis
                    lorem ipsum dolor placerat magna tempus feugiat.</p>
                  <p>Lectus ante vel nunc euismod est turpis sodales. Diam tempor dui lacinia
                    accumsan vivamus augue cubilia vivamus nisi eu eget ornare varius gravida dolore
                    euismod lorem ipsum dolor sit amet consequat eget ornare varius gravida euismod.
                    Gravida dis lorem ipsum dolor placerat magna tempus feugiat magna tempus lorem.</p>
                  <p>Lectus ante vel nunc euismod est turpis sodales. Diam tempor dui lacinia
                    accumsan vivamus augue cubilia.</p>
                </div>
                <div className="u4 u12-narrow">
                  <p>Placerat lectus ante vel nunc euismod est turpis sodales. Diam tempor dui
                    lacinia eget ornare varius gravida. Gravida dis placerat lectus ante vel nunc
                    euismod est turpis sodales. Diam tempor dui lacinia accumsan vivamus augue
                    cubilia vivamus nisi eu eget ornare varius gravida euismod.  Gravida dis
                    lorem ipsum dolor placerat magna tempus feugiat. Lectus ante vel nunc euismod
                    est turpis sodales. Diam tempor dui lacinia dolore.</p>
                  <p>Accumsan vivamus augue cubilia vivamus nisi eu eget ornare varius gravida
                    dolore euismod lorem ipsum dolor sit amet conseismod lorem ipsum dolor sit amet
                    consequat lorem ipsum consequat feugiat sed tempus euismod feugiat veroeros.</p>
                  <footer>
                    <a href="#fourth" className="button scrolly">Ipsum ornare lorem dolor</a>
                  </footer>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Fourth */}
        <section id="fourth" className="main">
          <header>
            <div className="container">
              <h2>Sed feugiat ipsum consequat</h2>
              <p>Gravida dis placerat lectus ante vel nunc euismod eget ornare varius gravida euismod lorem ipsum dolor sit amet consequat<br />
                feugiat. Gravida dis placerat lectus ante vel nunc euismod eget ornare varius gravida euismod lorem ipsum dolor sit amet.</p>
            </div>
          </header>
          <div className="content style4 featured">
            <div className="container percent-75">
              <form method="post" action="#">
                <div className="row percent-50">
                  <div className="u6 u12-mobile"><input type="text" placeholder="Name" /></div>
                  <div className="u6 u12-mobile"><input type="text" placeholder="Email" /></div>
                </div>
                <div className="row percent-50">
                  <div className="u12"><textarea name="message" placeholder="Message" defaultValue={""} /></div>
                </div>
                <div className="row">
                  <div className="u12">
                    <ul className="actions">
                      <li><input type="submit" className="button" defaultValue="Send Message" /></li>
                      <li><input type="reset" className="button alt" defaultValue="Clear Form" /></li>
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
