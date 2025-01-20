import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register required components for Chart.js
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const TemperatureGraph = ({ temperatureData }) => {
    // Extract data for graph
    const years = temperatureData.rawTemperatureData.map(data => data.theCountryTempData.year);
    const values = temperatureData.rawTemperatureData.map(data => data.theCountryTempData.value);

    // Define chart data
    const chartData = {
        labels: years.reverse(), // Reverse to show data in chronological order
        datasets: [
            {
                label: 'Temperature Change Value (°C)',
                data: values.reverse(), // Reverse to align with years
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                tension: 0.4, // Curve the line
                pointRadius: 3,
            },
        ],
    };

    // Define chart options
    const chartOptions = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Temperature Change Over Years',
            },
            legend: {
                position: 'top',
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Year',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Temperature Value (°C)',
                },
            },
        },
    };

    return <Line data={chartData} options={chartOptions} />;
};

export default TemperatureGraph;
