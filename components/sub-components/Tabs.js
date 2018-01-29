
import React, { Component } from 'react';
import TabCss from '../styles-jsx/tabs_css.js'
class Tabs extends Component {
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
                <TabCss />
                <nav className="nav-extended">
                    <div className="nav-content">
                        <ul className="tabs ">
                            <li className="tab"><a href="">Termales</a></li>
                            <li className="tab "><a href="">Rafting</a></li>
                            <li className="tab"><a href="">Aventura</a></li>
                            <li className="tab"><a href="">Paquetes</a></li>

                        </ul>
                    </div>
                </nav>

            </div>

        );
    }
}

export default Tabs;