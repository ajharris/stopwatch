# Stopwatch App

A simple React-based stopwatch application that tracks time in minutes, seconds, tenths of a second, and frames (at 60 FPS). It also supports multiple lap tracking.

## Features
- Start/Stop functionality
- Reset timer
- Lap tracking (stores multiple lap times)
- Displays time with precision up to frames (assuming 60 FPS)

## Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/stopwatch-app.git
   cd stopwatch-app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## Usage
- Click **Start** to begin the stopwatch.
- Click **Stop** to pause the stopwatch.
- Click **Lap** to record the current time as a lap.
- Click **Reset** to reset the timer and clear laps.

## File Structure
```
stopwatch-app/
│-- src/
│   ├── App.js      # Main React component
│   ├── App.css     # Basic styling
│   ├── index.js    # React entry point
│-- public/
│-- package.json   # Project dependencies
│-- README.md      # Documentation
```

## License
This project is licensed under the MIT License.

