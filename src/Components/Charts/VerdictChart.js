import React from "react";
import Chart from "react-google-charts"

class VerdictChart extends React.Component {
    render() {
        const verdictObj = {
            // "AC": 0,
            // "WA": 0,
            // "TLE": 0,
            // "MLE": 0,
            // "RE": 0,
            // "CE": 0,
            // "SKIP": 0,
            "OK": 0,
            'WRONG_ANSWER': 0,
            'TIME_LIMIT_EXCEEDED': 0,
            'MEMORY_LIMIT_EXCEEDED': 0,
            'RUNTIME_ERROR': 0,
            'COMPILATION_ERROR': 0,
            'SKIPPED': 0,
            'CHALLENGED': 0,
            "PARTIAL": 0,
            "IDLENESS_LIMIT_EXCEEDED": 0,
        }

        const len = this.props.userStatusData.length;

        console.log(this.props.userStatusData[0]);

        // for (let i = 0; i < len; i++) {
        //     verdictObj[this.props.data[i].verdict]++;
        // }

        return (
            <div>

            </div>
        );

    }
}

export default VerdictChart;