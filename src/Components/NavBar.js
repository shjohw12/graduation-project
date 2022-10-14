import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {



    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <span className="nav-title">Competitive Programming</span>
                        <br />
                        <span className="nav-title">Statistics Visualization</span>
                        <br />
                        <span className="nav-title">& Problem Recommendation</span>
                        <ul className="nav-menu">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/problem">Problem Recommendation</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    };


}

export default NavBar;