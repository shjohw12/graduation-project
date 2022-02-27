import React from 'react';
import HandleSearchBar from './Components/HandleSearchBar';
import Axios from "axios";

class Home extends React.Component {
    state = {
        userHandle: "",
        userStatusData: [],
        userRatingData: [],
    };

    getUserData = (userHandle) => {
        const base = "https://codeforces.com/api/user.status?handle=";
        Axios.get(base + userHandle)
            .then(
                (res) => {
                    this.setState({
                        searchData: res.data.result,
                        userHandle: userHandle
                    })
                }
            )
            .catch(
                (error) => {
                    this.setState({
                        error: true,
                    })
                    console.log(this.state.error);
                }
            );

        Axios.get(base + userHandle)
            .then(
                (res) => {
                    this.setState({
                        userRatingData: res.data.result
                    })
                }
            )
            .catch(
                (error) => {
                    this.setState({
                        error: true,
                    })
                    console.log(this.state.error);
                }
            );
    };

    render() {
        return (
            <div>
                <HandleSearchBar />
            </div>
        );
    };
};

export default Home;