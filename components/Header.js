import HeaderCss from './styles-jsx/header_css.js';
export default ()=>{
    return(
        <div>
        <HeaderCss/>
        <section id="header" className="dark">
            <header>
                <h1>Welcome to Rio Danta </h1>
                <p>Hospedaje y Tours En El Mismo Lugar A Un Precio Accesible</p>
            </header>
            <footer>
                <a href="#first" className="button scrolly">Habitaciones</a>
            </footer>
        </section>

        </div>
    )
}