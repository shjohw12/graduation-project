import React from "react";

class ContestChart extends React.Component {

    render() {
        let best = 1e10;
        let worst = -1e10;
        let maxUp = 0;
        let maxDown = 0;
        let bestCon = '';
        let worstCon = '';
        let maxUpCon = '';
        let maxDownCon = '';
        let tot = this.props.user_data.length;
        let con_url = 'https://codeforces.com/contest/';

        this.props.user_data.forEach(function (con) {
            if (con.rank < best) {
                best = con.rank;
                bestCon = con.contestId;
            }
            if (con.rank > worst) {
                worst = con.rank;
                worstCon = con.contestId;
            }
            let ch = con.newRating - con.oldRating;
            if (ch < 500) {
                if (ch > maxUp) {
                    maxUp = ch;
                    maxUpCon = con.contestId;
                }
                if (ch < maxDown) {
                    maxDown = ch;
                    maxDownCon = con.contestId;
                }
            }

        });
        const problems = {};
        for (let i = this.props.data.length - 1; i >= 0; i--) {
            let sub = this.props.data[i];
            let problemId = sub.problem.contestId + '-' + sub.problem.index;
            if (problems[problemId] === undefined) {
                problems[problemId] = {
                    attempts: 1,
                    solved: 0,
                };
            } else {
                if (problems[problemId].solved === 0) problems[problemId].attempts++;
            }

            if (sub.verdict === 'OK') {
                problems[problemId].solved++;
            }
        }
        let tried = 0;
        let solved = 0;
        let maxAttempt = 0;
        let maxAttemptProblem = '';
        let maxAc = '';
        let maxAcProblem = '';
        let unsolved = [];
        let solvedWithOneSub = 0;
        for (let p in problems) {
            tried++;
            if (problems[p].solved > 0) solved++;
            if (problems[p].solved === 0) unsolved.push(p);

            if (problems[p].attempts > maxAttempt) {
                maxAttempt = problems[p].attempts;
                maxAttemptProblem = p;
            }
            if (problems[p].solved > maxAc) {
                maxAc = problems[p].solved;
                maxAcProblem = p;
            }
            if (problems[p].solved === problems[p].attempts) solvedWithOneSub++;
        }
        const unsolvedList = unsolved.map(p => {
            if (p !== undefined) {
                return (
                    <div className="col s3 m2 l2"><a href={con_url + p.split('-')[0] + '/problem/' + p.split('-')[1]} target="_blank" style={{ display: "inline-block" }}>
                        {p}
                    </a>
                    </div>
                )
            }
        })
        return (
            <div >
                {this.props.data.length > 0 &&
                    <div className="row">
                        <div className="col collection s12 m6 l6 z-depth-2" style={{ borderRadius: "10px" }}>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Contest of</th>
                                        <th className="right">{this.props.user}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hoverable" style={{ borderRadius: "10px" }}>
                                        <td>Number of contests</td>
                                        <td className="right">{tot}</td>
                                    </tr>
                                    <tr className="hoverable" style={{ borderRadius: "10px" }}>
                                        <td>Best rank</td>
                                        <td className="right">{best}<a href={con_url + bestCon} target="_blank">({bestCon})</a></td>
                                    </tr>
                                    <tr className="hoverable" style={{ borderRadius: "10px" }}>
                                        <td>Worst Rank</td>
                                        <td className="right">{worst}<a href={con_url + worstCon} target="_blank">({worstCon})</a></td>
                                    </tr>
                                    <tr className="hoverable" style={{ borderRadius: "10px" }}>
                                        <td>Max Up</td>
                                        <td className="right">{maxUp}<a href={con_url + maxUpCon} target="_blank">({maxUpCon})</a></td>
                                    </tr>
                                    <tr className="hoverable" style={{ borderRadius: "10px" }}>
                                        <td>Max Down</td>
                                        <td className="right">{maxDown}<a href={con_url + maxDownCon} target="_blank">({maxDownCon})</a></td>
                                    </tr>
                                    <tr>
                                        <td style={{ color: "white" }}>kajsdhka</td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col collection s12 m6 l6 z-depth-2" style={{ borderRadius: "10px" }}>
                            <table >
                                <tbody>
                                    <tr className="hoverable" style={{ borderRadius: "10px" }}>
                                        <td>Tried</td>
                                        <td className="right">{tried}</td>
                                    </tr>
                                    <tr className="hoverable" style={{ borderRadius: "10px" }}>
                                        <td>Solved</td>
                                        <td className="right">{solved}</td>
                                    </tr>
                                    <tr className="hoverable" style={{ borderRadius: "10px" }}>
                                        <td>Average attempts</td>
                                        <td className="right">{(this.props.data.length / solved).toFixed(2)}</td>
                                    </tr>
                                    <tr className="hoverable" style={{ borderRadius: "10px" }}>
                                        <td>Max attempts</td>
                                        <td className="right">{maxAttempt}<a href={con_url + maxAttemptProblem.split('-')[0] + '/problem/' + maxAttemptProblem.split('-')[1]} target="_blank">({maxAttemptProblem})</a></td>
                                    </tr>
                                    <tr className="hoverable" style={{ borderRadius: "10px" }}>
                                        <td>Solved with one submission</td>
                                        <td className="right">{solvedWithOneSub} ({solved ? ((solvedWithOneSub / solved) * 100).toFixed(2) : 0})</td>
                                    </tr>
                                    <tr className="hoverable" style={{ borderRadius: "10px" }}>
                                        <td>Max AC(s)</td>
                                        <td className="right">{maxAc}<a href={con_url + maxAcProblem.split('-')[0] + '/problem/' + maxAcProblem.split('-')[1]} target="_blank">({maxAcProblem})</a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                }

            </div>
        )
    }

}
export default ContestChart;