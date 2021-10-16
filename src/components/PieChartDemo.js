import React from 'react'
import { Chart } from 'primereact/chart'

const PieChartDemo = () => {
    const chartData = {
        datasets: [
            {
                data: [23, 23, 35, 17, 2],
                backgroundColor: [
                    "#2791A2",
                    "#003E49",
                    "#F9AA82",
                    "#E57C00",
                    "#CD5A21"
                ],
                hoverBackgroundColor: [
                    "#2dabbf",
                    "#005d6d",
                    "#f2b698",
                    "#f48a11",
                    "#ea6f35"
                ]
            }
        ]
    };

    const lightOptions = {
        plugins: {
            legend: {
                labels: {
                    color: '#495057'
                }
            }
        }
    };

    return (
        <div style={{ 'padding-right': '10px' }} className="card p-d-flex p-jc-center">
            <Chart type="pie" data={chartData} options={lightOptions} style={{ position: 'relative', width: '100%', }} />
        </div>
    )
}

export default PieChartDemo