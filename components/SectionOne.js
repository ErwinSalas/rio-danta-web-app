import Link from 'next/link';
export default ()=>(
      <section id="first" className="main">
      
        <header>
        <img className="left-align" width="230" heigth="70" src="/static/images/tapir.png"/>
          <div className="container">
        
            
            <h2>Habitaciones &amp; Ofertas Especiales</h2>
            
            <p>Podrás Obtener Increibles Descuentos Si Reservas Hospedaje + Tour Desde Nuestra Pagina Web.</p>

          </div>
        </header>

        <div className="content dark style1 featured">
          <div className="container">
            <div className="row">
              <div className="u4 u12-narrow">
                <section>
                  <span className="feature-icon"><span className="icon "><img src="static/images/acc1.png" height={100} width={100} style={{margingTop : '15%'}} /></span></span>
                  <header>
                    <h3>Habitaciones Superiores</h3>
                  </header>
                  <p>Servicios: Desayuno incluido, Aire acondicionado, TV por cable, Internet inalambrico, Agua caliente, Parqueo con camaras de seguridad.</p>
                  <footer>
                  <Link href="/HabitacionesS">
                  <a href="#second" className="button scrolly">Ver Mas</a>
                  </Link>
                  </footer>
                </section>
              </div>
              <div className="u4 u12-narrow">
                <section>
                  <span className="feature-icon"><span className="icon "><img src="static/images/fan1.png" height={65} width={85} style={{margingTop: '15%'}} /></span></span>
                  <header>
                    <h3>Habitaciones Estandar</h3>
                  </header>
                  <p>Servicios: Desayuno incluido, TV por cable, Internet inalambrico, Agua caliente, Parqueo con camaras de seguridad, Ventilador de pie.</p>
                  <footer>
                <Link href="/HabitacionesE">
                                  <a href="#second" className="button scrolly">Ver Mas</a>
                                </Link>                  </footer>
                </section>
              </div>
              <div className="u4 u12-narrow">
                <section>
                  <span className="feature-icon"><span className="icon "><img src="static/images/bed1.png" height={70} width={60} style={{margingTop: '25%'}} /></span></span>
                  <header>
                    <h3>Habitaciones Compartidas</h3>
                  </header>
                  <p>Servicios: Desayuno incluido, TV por cable, Internet inalambrico, Agua caliente, Parqueo con camaras de seguridad, Ventilador de pie.</p>
                  <footer>
                  <Link href="/HabitacionesC">
                  <a href="" className="button scrolly">Ver Mas</a>
                </Link>
                  </footer>
                </section>
              </div>
            </div>
            <div className="row">
              <div className="u12">
              </div>
            </div>
          </div>
        </div>
      </section>
)