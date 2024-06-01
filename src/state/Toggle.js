import React, { useState } from 'react';
import "../style/toggle.css"
const Toggle = () => {
    const [on,setOn] = useState(false)
    const handleBtn = () => {
        console.log(on)
        setOn((on) => {
            return !on
        })
    }
    return (
        <div>
            <div className={`btn ${on ?"btn_active ":""}`} onClick={handleBtn} >
                <div className={`circle ${on?"circle_active": ""}`}></div>
            </div>
            {/* <div style={{display: 'flex',gap: 30}}>
                <div onClick={() => {setOn(true)}}>
                    On 
                </div>
                <div onClick={() => {setOn(false)}}>
                    Off 
                </div>
            </div> */}
        </div>
    );
};

export default Toggle;