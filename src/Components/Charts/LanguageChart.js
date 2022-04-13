import React from "react";
import Chart from "react-google-charts";

class LanguageChart extends React.Component {
    render() {
        const langObj = {};
        const len = this.props.userStatusData.length;

        for (let i = 0; i < len; i++) {
            if (langObj[this.props.userStatusData[i].programmingLanguage] === undefined) {
                langObj[this.props.userStatusData[i].programmingLanguage] = 1;
            }
            else {
                langObj[this.props.userStatusData[i].programmingLanguage]++;
            }
        }

        const data = [
            ['Language', 'Stats'],
        ]

        const slices = [
            '#f44336',
            '#E91E63',
            '#9C27B0',
            '#673AB7',
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
            '#2196F3',
            '#009688',
            '#8BC34A',
            '#CDDC39',
            '#FFC107',
            '#FF9800',
        ];

        for (let elem in langObj) {
            data.push([elem, langObj[elem]]);
        }

        return (
            <div>
                <Chart
                    width={'100%'}
                    height={'400px'}
                    className="lang-chart"
                    chartType="PieChart"
                    // style={{paddingTop:20}}
                    data={data}
                    options={{
                        chartArea: {
                            width: '100%',
                            height: '350',
                        },
                        fontName: 'Roboto',
                        title: 'Languages of the ' + 'hi',
                        legend: 'none',
                        pieSliceText: 'label',
                        titleTextStyle: {
                            fontSize: 18,
                            color: '#393939',
                            bold: false
                        },
                        slices: slices,
                        is3D: true,
                    }}
                    rootProps={{ 'data-testid': '3' }}
                />
            </div>
        )
    }
}

export default LanguageChart;