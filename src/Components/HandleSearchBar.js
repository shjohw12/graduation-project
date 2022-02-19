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
            <form>
                <div>
                    <input />
                </div>
            </form>
        );
    }
}
export default HandleSearchBar;