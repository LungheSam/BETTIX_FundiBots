import React from 'react';
import "../App.css";

function RemoteControl() {
    return (
        <div className='remote'>
            <div className='remote-title-group'>
                <h1 className='remote-title'>Remote Control</h1>
                <button className="remote-button"> Activate</button>
            </div>
            <div className='remote-hero'>
                <div style={{ margin: '20px 20px', backgroundColor: '#000', width: '640px', height: '480px', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className='remote-camera'>
                    Camera Feed Placeholder
                </div>
                <div className='remote-buttons'>
                    <div style={{ position: 'relative', margin: '20px auto', width: '200px', height: '200px' }}>
                        <button className="gamepad-btn" style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)' }} onClick={() => alert('Move Forward')}>
                            <i className="fa fa-arrow-up"></i>
                        </button>
                        <button className="gamepad-btn" style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)' }} onClick={() => alert('Move Backward')}>
                            <i className="fa fa-arrow-down"></i>
                        </button>
                        <button className="gamepad-btn" style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)' }} onClick={() => alert('Turn Left')}>
                            <i className="fa fa-arrow-left"></i>
                        </button>
                        <button className="gamepad-btn" style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)' }} onClick={() => alert('Turn Right')}>
                            <i className="fa fa-arrow-right"></i>
                        </button>
                        <button className="gamepad-btn" style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)',backgroundColor:"red" }} onClick={() => alert('Stop')}>
                            <i className="fa fa-stop-circle" style={{color:'white'}}></i>
                        </button>
                    </div>
                    <div className='remote-buttons-reset-stop'>
                        <button onClick={() => alert('Reset')} className='remote-button remote-button-reset'>Reset</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RemoteControl;
