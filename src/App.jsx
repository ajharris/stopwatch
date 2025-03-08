import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState(0) // Time in milliseconds
  const [running, setRunning] = useState(false)
  const [laps, setLaps] = useState([])

  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => {
        setTime((prev) => prev + 10); // Update every 10 milliseconds
      }, 10);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [running]);

  const formatTime = (ms) => {
    const frames = Math.floor((ms % 1000) / (1000 / 60)); // Approximate frames at 60 FPS
    const tenths = Math.floor((ms % 1000) / 100); // Tenths of a second
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor(ms / 60000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}.${tenths}${frames}`;
  };

  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <div className="time">{formatTime(time)}</div>
      <div className="buttons">
        <button onClick={() => setRunning(!running)}>
          {running ? 'Stop' : 'Start'}
        </button>
        <button
          onClick={() => {
            setTime(0);
            setLaps([]);
          }}
        >
          Reset
        </button>
        <button
          onClick={() => {
            if (running) {
              setLaps([...laps, time]);
            }
          }}
        >
          Lap
        </button>
      </div>
      <div className="laps">
        {laps.map((lapTime, index) => (
          <div key={index} className="lap">Lap {index + 1}: {formatTime(lapTime)}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
