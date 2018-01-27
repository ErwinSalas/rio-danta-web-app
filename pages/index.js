
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
    
    <Header 
      title="Welcome to Rio Danta Hostel"
      subtitle="Hospedaje y Tours En El Mismo Lugar A Un Precio Accesible"
    
    />
    <SectionOne/>
    <SectionTours/>
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
