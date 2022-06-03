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

        const slices = [
            { color: '#4CAF50' },
            { color: '#f44336' },
            { color: '#2196F3' },
            { color: '#673AB7' },
            { color: '#E91E63' },
        ];

        for (let i = 0; i < len; i++) {
            verdictObj[this.props.userStatusData[i].verdict]++;
        }

        const title = 'Verdict chart of ' + this.props.userHandle;

        return (
            <div className="verdict-chart">
                {len > 0 &&
                    <Chart
                        width={'100%'}
                        height={'400px'}
                        chartType="PieChart"

                        data={[
                            ['Verdict', 'Stats'],
                            ['WA', verdictObj.WRONG_ANSWER],
                            ['TLE', verdictObj.TIME_LIMIT_EXCEEDED],
                            ['MLE', verdictObj.MEMORY_LIMIT_EXCEEDED],
                            ['AC', verdictObj.OK],
                            ['RE', verdictObj.RUNTIME_ERROR],
                        ]}

                        options={{
                            slices: slices,
                            fontName: 'Roboto',
                            chartArea: {
                                width: '100%',
                                height: '350',
                            },
                            title: title,
                            titleTextStyle: {
                                fontSize: 18,
                                color: '#393939',
                                bold: false
                            },
                            legend: 'none',
                            pieSliceText: 'label',
                            is3D: true,
                        }}
                        rootProps={{ 'data-testid': '2' }}
                    />
                }

            </div>
        );

    }
}

export default VerdictChart;