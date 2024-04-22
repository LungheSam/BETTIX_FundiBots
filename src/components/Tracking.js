import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Gauge } from 'react-circular-gauge';
import chroma from 'chroma-js'; // Optional for color manipulation
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import 'leaflet/dist/leaflet.css';
import "../App.css";

function Tracking() {
    const [trackingData, setTrackingData] = useState({
        batteryPercentage: 'Loading...',
        averageSpeed: 'Loading...',
        currentLocation: { lat: 0, lon: 0 },
        destination: { lat: 0, lon: 0 }
    });

    useEffect(() => {
        const fetchData = async () => {
            const data = await getTrackingDataFromAPI();
            setTrackingData(data);
        };

        fetchData();
        const intervalId = setInterval(fetchData, 5000); // Fetch new data every 5 seconds
        return () => clearInterval(intervalId); // Cleanup the interval on component unmount
    }, []);

    async function getTrackingDataFromAPI() {
        return {
            batteryPercentage: '85',
            averageSpeed: '1.2', // Assuming average speed in km/h
            currentLocation: { lat: 40.712776, lon: -74.005974 },
            destination: { lat: 40.712776, lon: -74.015974 }
        };
    }

    // Speedometer component code
    const Speedometer = ({ speed }) => {
        return (
            <div className='tracking-speed'>
                <Gauge
                    value={1}
                    minValue={0}
                    maxValue={10}
                    renderTopLabel="m/s"
                    startAngle={0}
                    endAngle={360}
                    animated={true}
                    arcColor={({ normValue }) => chroma.scale(['green', 'red'])(normValue).css()} // Optional color customization
                />
            </div>
        );
    };

    return (
        <div style={{ padding: '20px' }} className='tracking'>
            <h1 className='tracking-title'>Robot Tracking Information</h1>
            <div className="info-cards">
                <div className="info-card">
                    <div className='tracking-circular'>
                        <p className='unit'>Battery Status (%)</p>
                        <CircularProgressbar
                            value={trackingData.batteryPercentage}
                            text={`${trackingData.batteryPercentage}%`}
                        />
                    </div>
                </div>
                <div className="info-card">
                    <p className='unit'>Average Speed (m/s)</p>
                    <div className='tracking-circular'>
                        <CircularProgressbar
                            value={trackingData.averageSpeed}
                            text={`${trackingData.averageSpeed}`}
                            styles={{
                                root: {}, // Styles for the root element
                                trail: { stroke: '#d6d6d6' }, // Styles for the trail (background)
                                path: { stroke: '#00ff00' }, // Styles for the progress path
                                text: { fill: '#00ff00', fontSize: '16px' }, // Styles for the text
                                background: { fill: '#333' }, // Styles for the background (circle behind the progress bar)
                            }}
                            maxValue={5}
                            strokeWidth={10} // Thickness of the progress bar
                            trailColor="#f0f0f0" // Color of the trail (background)
                            rotation={-90} // Rotate the progress bar counterclockwise by 90 degrees
                        />
                    </div>
                </div>
                <div className="map-card" style={{ height: '400px' }}>
                    <MapContainer center={[trackingData.currentLocation.lat, trackingData.currentLocation.lon]} zoom={13} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[trackingData.currentLocation.lat, trackingData.currentLocation.lon]}>
                            <Popup>
                                Current Location
                            </Popup>
                        </Marker>
                        <Marker position={[trackingData.destination.lat, trackingData.destination.lon]}>
                            <Popup>
                                Destination
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
                <div className="camera-feed-card">
                    <p className='unit' style={{color:'white'}}>Camera Feed</p>
                    <img src="camera_feed_placeholder.jpg" alt="Camera Feed" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
                </div>
            </div>
        </div>
    );
}

export default Tracking;
