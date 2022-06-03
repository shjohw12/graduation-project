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

        const colors = [
            '#f44336',
            '#E91E63',
            '#9C27B0',
            '#673AB7',
            '#2196F3',
            '#009688',
            '#8BC34A',
            '#CDDC39',
            '#FFC107',
            '#FF9800',
            '#FF5722',
            '#795548',
            '#607D8B',
            '#E65100',
            '#827717',
            '#004D40',
            '#1A237E',
            '#6200EA',
            '#3F51B5',
            '#F50057',
            '#304FFE',
            '#b71c1c',
        ]

        const title = 'Tag chart of ' + this.props.userHandle;

        return (
            <div>
                {
                    len > 0 &&
                    <Chart
                        width={'100%'}
                        height={'500px'}
                        className="col s12 z-depth-2"
                        chartType="PieChart"
                        data={data}
                        options={{
                            legend: {
                                position: 'right',
                                alignment: 'center',
                                textStyle: {
                                    fontSize: 12,
                                    fontName: 'Roboto'
                                }
                            },
                            chartArea: { width: '80%', height: '70%' },
                            title: title,
                            pieSliceText: 'label',
                            pieHole: 0.5,
                            tooltip: {
                                text: 'percentage'
                            },
                            fontName: 'Roboto',
                            titleTextStyle: {
                                fontSize: 18,
                                color: '#393939',
                                bold: false,
                            },
                            colors: colors
                        }}
                        rootProps={{ 'data-testid': '2' }}
                    />
                }

            </div>
        )


    }

}

export default TagChart;