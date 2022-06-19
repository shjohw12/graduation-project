import React from 'react';
import HandleSearchBar from './Components/HandleSearchBar';
import Axios from "axios";
import VerdictChart from './Components/Charts/VerdictChart';
import LanguageChart from './Components/Charts/LanguageChart';
import TagChart from './Components/Charts/TagChart';
import ProblemLevelChart from './Components/Charts/ProblemLevelChart';

class Home extends React.Component {
    state = {
        userHandle: "",
        userStatusData: [],
        userRatingData: [],
        isError: false,
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
                        isError: true,
                    });
                    console.log(error);
                }
            );

        Axios.get(base + "user.rating?handle=" + userHandle)
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
                        isError: true,
                    });
                    console.log(error);
                }
            );
    };

    render() {
        return (
            <div>
                <HandleSearchBar getUserData={this.getUserData} />
                {
                    // Conditional Rendering
                    this.state.isError &&
                    <div>
                        <p>Invalid Username or Network Problem</p>
                    </div>
                }
                <div>
                    <VerdictChart userStatusData={this.state.userStatusData} userRatingData={this.state.userRatingData} userHandle={this.state.userHandle} />
                </div>

                <div>
                    <LanguageChart userStatusData={this.state.userStatusData} userRatingData={this.state.userRatingData} userHandle={this.state.userHandle} />
                </div>

                <div>
                    <TagChart userStatusData={this.state.userStatusData} userHandle={this.state.userHandle} />
                </div>

                <div >
                    <ProblemLevelChart userStatusData={this.state.userStatusData} userHandle={this.state.userHandle} />
                </div>

                <div >
                    <ProblemRatingChart userStatusData={this.state.userStatusData} userHandle={this.state.userHandle} />
                </div>


            </div>



        );
    };
};

export default Home;