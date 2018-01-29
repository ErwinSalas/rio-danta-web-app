import Header from '../components/Header.js'
import MainCss from '../components/styles-jsx/main_css.js'
import Catalog from '../components/SectionCatalog.js'
import Footer from "../components/sub-components/Footer.js"
import Link from 'next/link';


export default () => (
  <div>
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



    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <MainCss />

    <Header
      title="Catalogo de toures"
      subtitle="Aprovecha al maximo tu estadia en La Fortuna"
      btntitle="Start"
      classRef="#header-tours"

    />



    <Catalog />
    {/* Third */}



    {/* Fourth */}
    <section id="fourth" className="main">
      <header>
        <div className="container">
          <h2>Contacto</h2>
          <p>Escribenos para obtener los mejores precios y reservar los mejores tours<br />
            Si lo haces desde nuestra pagina podras aprovechar los mejores descuentos<br />
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

    <Footer />
    {/* Scripts */}
  </div>

)
