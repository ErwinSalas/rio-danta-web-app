import NavCss from './styles-jsx/nav_css.js';

const Nav = () => (
    <div>
    <NavCss/>
    <nav className="navbar navbar-dark bg-dark">
        <div className="pull-right">
            <div className="row-nav">
                <div className=" search">
                    <input type="text" className="form-control input-sm" maxlength="64" placeholder="Search" />
                    <button type="submit" className="btn-search "><img src="static/images/search.svg"/></button>
                    
                </div>
            </div>
        </div>
        <button className="nav-item">Categorias</button>
    </nav>
    </div>
)
export default Nav