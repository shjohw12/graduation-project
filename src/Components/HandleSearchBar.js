import React from "react";

class HandleSearchBar extends React.Component {
    state = {
        search: null,
    };
    handleChange = (e) => {
        this.setState({
            search: e.target.value
        });
    };
    handleSearch = (e) => {
        e.preventDefault();
        this.props.addSearch(this.state.search)
    };
    render() {
        return (
            <div class="search-box">
                <form>
                    <input class="search-txt" type="text" placeholder="Enter Codeforces Handle" />
                    <button class="search-btn" type="submit">search</button>
                </form>
            </div>
        );
    }
}
export default HandleSearchBar;