import React from "react";
import Chart from "react-google-charts";


class TagChart extends React.Component {

    render() {
        const tagObj = {

        };

        const len = this.props.userStatusData.length;

        for (let i = 0; i < len; i++) {
            if (this.props.userStatusData[i].verdict == "OK") {
                const tagLen = this.props.userStatusData[i].problem.tags.length;
                for (let j = 0; j < tagLen; j++) {
                    if (tagObj[this.props.userStatusData[i].problem.tags[j]] === undefined) {
                        tagObj[this.props.userStatusData[i].problem.tags[j]] = 1;
                    }
                    else {
                        tagObj[this.props.userStatusData[i].problem.tags[j]]++;
                    }
                }
            }
        }

        const data = [['Tag', "Stats"]];

        for (let elem in tagObj) {
            data.push([elem, tagObj[elem]]);
        }


        return (
            <div>

            </div>
        )


    }

}

export default TagChart;