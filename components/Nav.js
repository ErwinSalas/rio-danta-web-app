import NavCss from './styles-jsx/nav_css.js';
import React, { Component } from 'react';

class Nav extends Component {
    constructor(props) {
        super();

        this.state = {
            users: []
        };
    }

    componentWillMount() {

    }

    render() {

        return (
            <div>
                <NavCss />
                
                <nav className="navbar-custom navbar-custom-dark bg-dark">
                    <div className="row-nav">

                        <a className="search">
                            <input type="text" className="form-control input-sm" maxlength="64" placeholder="Search" onChange={this.props.searchBy} />
                            <button type="submit" className="btn-search "></button>

                        </a>
                        
                    </div>
                </nav>
            </div>

        );
    }
}

export default Nav;