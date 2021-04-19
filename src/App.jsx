import React, { useState } from 'react';

const currTime = new Date().toLocaleTimeString();

const App = () => {
    const [time, setTime] = useState(currTime);
    console.log(time);

    const ChangeTime = () => {
        setTime(new Date().toLocaleTimeString());
    }

    setInterval(ChangeTime, 1000);

    return(
        <>
            <h1 className="heading_style">{time}</h1>
            {/* <button onClick={ChangeTime}>Click Me </button> */}
        </>
        
    )
}

export default App;