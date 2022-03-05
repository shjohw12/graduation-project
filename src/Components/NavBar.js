import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {



    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <span>foo</span>

                        <ul className="nav-menu">
                            <li><Link to="/">home</Link></li>
                            <li><Link to="/stat">stat</Link></li>
                        </ul>
                    </div>
                </nav>



            </div>
        );
    };


}

export default NavBar;