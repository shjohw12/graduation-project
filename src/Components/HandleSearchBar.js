import React from "react";

class HandleSearchBar extends React.Component {
    state = {
        userHandle: "",
    };

    handleChange = (e) => {
        this.setState({
            userHandle: e.target.value
        });
    };

    handleSearch = (e) => {
        e.preventDefault();
        this.props.getUserData(this.state.userHandle);
    };

    render() {
        return (
            <div className="search-box">
                <form onSubmit={this.handleSearch}>
                    <input onChange={this.handleChange} className="search-txt" type="text" placeholder="Enter Codeforces Handle" />
                    <button className="search-btn" type="submit">search</button>
                </form>
            </div >
        );
    }
}

export default HandleSearchBar;