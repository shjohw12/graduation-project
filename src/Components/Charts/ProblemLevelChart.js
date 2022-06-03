import React from "react";
import { Chart } from "react-google-charts";

class ProblemLevelChart extends React.Component {

    render() {

        const problemLevelCountObj = {};
        const len = this.props.userStatusData.length;

        for (let i = 0; i < len; i++) {
            const problemLevel = this.props.userStatusData[i].problem.index.charAt(0);
            if (this.props.userStatusData[i].verdict == "OK") {
                if (problemLevelCountObj[problemLevel] == undefined) {
                    problemLevelCountObj[problemLevel] = 1;
                }
                else {
                    ++problemLevelCountObj[problemLevel];
                }
            }
        }

        const style = {
            fontSize: 18,
            color: '#393939',
            bold: false,
        };

        const data = [["Level", "Count"]];

        const sortedData = [];

        for (let elem in problemLevelCountObj) {
            sortedData.push([elem, problemLevelCountObj[elem]]);
        }

        sortedData.sort();

        for (let i = 0; i < sortedData.length; i++) {
            data.push(sortedData[i]);
        }

        const title = "Problem level chart of " + this.props.userHandle;

        return (
            <div>
                {len > 0 &&
                    <Chart
                        width={'100%'}
                        height={'300px'}
                        className="center col s12 z-depth-2"
                        chartType="Bar"
                        data={data}
                        style={{ paddingTop: 20 }}
                        options={{
                            chartArea: {
                                width: '100%',
                                height: '350',
                            },
                            chart: {
                                title: title,
                                legend: "none",
                            },
                            bar: { groupWidth: '95%' },
                            legend: { position: 'none' },
                            fontName: 'Roboto',
                            titleTextStyle: style,
                            vAxis: { format: '0' },

                        }}

                    />
                }
            </div>
        )
    }
};

export default ProblemLevelChart;