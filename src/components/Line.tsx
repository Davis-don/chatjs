import { Line } from 'react-chartjs-2';
import {
    Chart as Chartjs,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

Chartjs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const LineGraph = () => {
    // Line chart options
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top', // 'top', 'bottom', 'left', 'right'
            },
            title: {
                display: true,
                text: 'Curved Line Graph',
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'X-axis Label',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Y-axis Label',
                },
            },
        },
    };

    // Line chart data
    const lineChartData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'My Dataset',
                data: [10, 20, 15, 30, 25, 35, 40],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                tension: 0.4, // This makes the line curved
                fill: true, // Optional: To fill the area under the curve
                pointBackgroundColor: 'rgba(75, 192, 192, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(75, 192, 192, 1)',
            },
        ],
    };

    return (
        <>
            <Line options={options} data={lineChartData} />
        </>
    );
};
