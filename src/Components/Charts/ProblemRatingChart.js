import React from "react";
import { Chart } from "react-google-charts";

class ProblemRatingChart extends React.Component {

    render() {
        const problemRatingObj = {};

        const prob = {
        };

        const len = this.props.userStatusData.length;

        for (let i = 0; i < len; i++) {
            const rating = this.props.userStatusData[i].problem.rating;

            if (this.props.userStatusData[i].verdict === "OK") {
                if (rating !== undefined) {
                    if (problemRatingObj[rating] === undefined) {
                        problemRatingObj[rating] = 1;
                    }
                    else {
                        ++problemRatingObj[rating];
                    }
                }
            }
        }

        const sortedData = [];
        const data = [["Rating", "Count"]];

        for (let elem in problemRatingObj) {
            sortedData.push([parseInt(elem), problemRatingObj[elem]]);
        }

        sortedData.sort(function (a, b) {
            return a[0] === b[0] ? 0 : (a[0] < b[0] ? -1 : 1);
        });

        for (let i = 0; i < sortedData.length; i++) {
            data.push([sortedData[i][0].toString(), sortedData[i][1]]);
        }

        const style = {
            fontSize: 18,
            color: '#393939',
            bold: false,
        };

        return (
            <div>
                {len > 0 &&
                    <Chart
                        width={'100%'}
                        height={'300px'}
                        className="center col s12 z-depth-2"
                        chartType="Bar"
                        style={{ paddingTop: 20 }}
                        data={data}
                        options={{
                            chartArea: {
                                width: '100%',
                                height: '350',
                            },
                            chart: {
                                title: 'Problem ratings of ' + this.props.userHandle,
                                legend: "none",
                            },
                            bar: { groupWidth: '95%' },
                            legend: { position: 'none' },
                            titleTextStyle: style,

                        }}

                    />
                }
            </div>
        )
    }

};