import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import RemoteControl from './components/RemoteControl';
import Tracking from './components/Tracking';
import './App.css';

function App() {
    return (
        <Router>
            <div>
                <Header />
                <div style={{ display: 'flex' }}>
                    <Sidebar />
                    <main style={{ flex: 1 }}>
                        <Routes>
                            <Route path="/home" element={<Home />} />
                            <Route path="/remote-control" element={<RemoteControl />} />
                            <Route path="/tracking" element={<Tracking />} />
                            <Route path="/" element={<Home />} />
                        </Routes>
                    </main>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
