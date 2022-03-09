import React from "react";
import Axios from "axios";
import HandleSearchBar from "./Components/HandleSearchBar";

class Problem extends React.Component {
    state = {
        userHandle: "",
        userStatusData: [],
    };

    getUserData = (userHandle) => {
        const base = "https://codeforces.com/api/"
        Axios.get(base + "user.status?handle=" + userHandle)
            .then(
                (res) => {
                    this.setState({
                        userStatusData: res.data.result,
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
    };

    render() {

        for (let i = 0; i < this.state.userStatusData.length; i++) {

        }

        return (
            <div>
                <HandleSearchBar getUserData={this.getUserData} />
            </div>
        );
    };


}

export default Problem;