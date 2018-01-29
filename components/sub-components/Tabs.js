
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
                <TabCss/>
                <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
                <nav className="nav-extended">
                    <div className="nav-content">
                        <ul className="tabs ">
                            <li className="tab "><img className="brand-logo" width="80" heigth="22" src="http://www.hostelriodanta.com/wp-content/uploads/2016/10/logo_riodanta-2.jpg"/></li>
                            <li className="tab"><a  href="">Termales</a></li>
                            <li className="tab "><a href="">Rafting</a></li>
                            <li className="tab"><a href="">Aventura</a></li>
                        </ul>
                    </div>
                </nav>
                
            </div>

        );
    }
}

export default Tabs;