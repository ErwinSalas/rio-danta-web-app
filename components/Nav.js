import NavCss from './styles-jsx/nav_css.js';

const Nav = () => (
    <div>
    <NavCss/>
    <nav className="navbar navbar-dark bg-dark">
        <div className="pull-right">
            <div className="row-nav">
                <div className="u12">
                    <div className=" search">
                    <input type="text" className="form-control input-sm" maxlength="64" placeholder="Search" />
                    <button type="submit" className="btn-search"></button>
                </div></div>
            </div>
        </div>
    </nav>
    </div>
)
export default Nav