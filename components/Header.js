import HeaderCss from './styles-jsx/header_css.js';
export default (props) => {
    return (
        <div>
            <HeaderCss />
            <section id="header" className="dark">

                <header>
                    <h1>{props.title}</h1>

                    <p>{props.subtitle}</p>
                </header>
                <footer>
                    <a href="#first" className="button scrolly">{props.btntitle}</a>
                </footer>
            </section>

        </div>
    )
}