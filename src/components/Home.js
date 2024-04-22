

  
import React,{useEffect, useState}from 'react';
import '../App.css';
import { Pie, Bar, Scatter } from 'react-chartjs-2';
// src/components/Home.js
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    ArcElement, // Import ArcElement for pie and doughnut charts
    Tooltip,
    Legend,
  } from 'chart.js';
  
  // Register the components you want to use
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    ArcElement, // Register the ArcElement
    Tooltip,
    Legend
  );

//   const pieData = {
//     labels: ['Completed', 'In Progress', 'Pending', 'Failed'],
//     datasets: [{
//         data: [50, 25, 15, 10],
//         backgroundColor: ['#46BFBD', '#FDB45C', '#949FB1', '#F7464A'],
//         hoverBackgroundColor: ['#5AD3D1', '#FFC870', '#A8B3C5', '#FF5A5E']
//     }]
// };

const barData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
        {
            label: 'Average Speed in KM/H',
            data: [65, 59, 80, 81, 56],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
        }
    ]
};
const scatterData = {
    datasets: [{
        label: 'Scatter Dataset',
        data: Array.from({length: 50}, () => ({
            x: Math.random() * 100,
            y: Math.random() * 100,
        })),
        backgroundColor: 'rgba(255, 99, 132, 1)',
    }]
};

const scatterOptions = {
    scales: {
        x: {
            type: 'linear',
            position: 'bottom'
        }
    }
};
const datasets = [
    {
        labels: ['Completed', 'In Progress', 'Pending', 'Failed'],
        data: [50, 25, 15, 10],
        backgroundColor: ['#46BFBD', '#FDB45C', '#949FB1', '#F7464A'],
        title:"Tasks"
    },
    {
        labels: ['Navigation', 'Data Collection', 'Object Manipulation', 'Idle'],
        data: [40, 30, 20, 10],
        backgroundColor: ['#4D5360', '#AC64AD', '#79D1CF', '#FF9F80'],
        title:"Battery Usage By Task"
    },
    {

        labels: ['Active Time', 'Charging', 'Maintenance', 'Downtime'],
        data: [60, 20, 10, 10],
        backgroundColor: ['#003f5c', '#58508d', '#bc5090', '#ff6361'],
        title: "Resource Allocation"
    }
];

function Home() {
    const [currentDatasetIndex, setCurrentDatasetIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDatasetIndex(prevIndex => (prevIndex + 1) % datasets.length);
        }, 4000); // Change dataset every 2000 milliseconds (2 seconds)

        return () => clearInterval(intervalId); // Clean up the interval on unmount
    }, []);

    const data = {
        labels: datasets[currentDatasetIndex].labels,
        datasets: [
            {
                data: datasets[currentDatasetIndex].data,
                backgroundColor: datasets[currentDatasetIndex].backgroundColor,
                hoverBackgroundColor: datasets[currentDatasetIndex].backgroundColor.map(color => shadeColor(color, -20)),
            }
        ]
    };
    return (
        
        <div className='home'>
            <h1 className='home-robox'>BETTIX</h1>
            <div className='home-stats'>
                <div className='home-distance'>
                    <h2 className='home-stats-title'>{datasets[currentDatasetIndex].title}</h2>
                    <Pie data={data} />
                </div>
                <div className='home-speed'>
                    <h2 className='home-stats-title'>Average Speed </h2>
                    <Bar data={barData} />
                </div>
                <div className='forecast'>
                    <h2 className='home-stats-title'> Total Distance</h2>
                    <div className='forcast-card'>
                        <p className='unit'>Km</p>
                        <p className='dist'>25</p>
                    </div>
                    {/* <Scatter data={scatterData} options={scatterOptions} /> */}
                </div>
            </div>
        </div>
    );
}
function shadeColor(color, percent) {
    let R = parseInt(color.substring(1,3),16);
    let G = parseInt(color.substring(3,5),16);
    let B = parseInt(color.substring(5,7),16);

    R = parseInt(R * (100 + percent) / 100);
    G = parseInt(G * (100 + percent) / 100);
    B = parseInt(B * (100 + percent) / 100);

    R = (R<255)?R:255;  
    G = (G<255)?G:255;  
    B = (B<255)?B:255;  

    let RR = ((R.toString(16).length==1)?"0"+R.toString(16):R.toString(16));
    let GG = ((G.toString(16).length==1)?"0"+G.toString(16):G.toString(16));
    let BB = ((B.toString(16).length==1)?"0"+B.toString(16):B.toString(16));

    return "#"+RR+GG+BB;
}
export default Home;
