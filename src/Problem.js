import React from "react";
import Axios from "axios";
import ProblemRecommendation from "./Components/ProblemRecommendation";
import HandleSearchBar from "./Components/HandleSearchBar";

class Problem extends React.Component {
    state = {
        search: "",
        data: [],
        error: false,
    };

    addSearch = (search) => {
        const url = "https://codeforces.com/api/user.status?handle=" + search;
        Axios.get(url)
            .then(res => {
                this.setState({
                    data: res.data.result,
                    search: search
                })

            })
            .catch(error => {
                this.setState({
                    error: true
                });
                console.log(this.state.error)
            });

    };

    render() {
        const problems = {};
        for (var i = 0; i < this.state.data.length; i++) {
            var sub = this.state.data[i];
            var problemId = sub.problem.contestId + '-' + sub.problem.index;
            if (sub.verdict === 'OK') {
                if (sub.problem.rating !== undefined) {
                    problems[problemId] = sub.problem.rating
                }
            }
        }
        const p = [];
        for (var x in problems) {
            p.push([parseInt(problems[x]), x]);
        }


        p.sort(sortFunction);
        p.sort(() => Math.random() - 0.5);

        function sortFunction(a, b) {
            if (a[0] === b[0]) {
                return 0;
            } else {
                return (a[0] < b[0]) ? -1 : 1;
            }
        }

        const prob = [];
        for (i = 0; i < p.length; i++) {
            let d = {
                rating: p[i][0],
                id: p[i][1],
            };
            prob.push(d)
        }

        return (
            <div>
                <HandleSearchBar getUserData={this.addSearch} />
                {this.state.error &&
                    <div>
                        <p className="center">Couldn't find user. Network problem?</p>
                    </div>
                }
                {prob.length > 0 &&
                    <div className="container col s12">
                        <ProblemRecommendation post={prob} />
                    </div>
                }

            </div>

        )

    }



}


export default Problem;