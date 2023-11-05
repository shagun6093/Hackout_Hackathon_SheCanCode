import React, { useState } from 'react';
import './tracker.css'

const PeriodPrediction = () => {
  const [lastPeriodDate, setLastPeriodDate] = useState('');
  const [cycleLength, setCycleLength] = useState('');
  const [daysBetween, setDaysBetween] = useState('');
  const [predictedDate, setPredictedDate] = useState(null);

  const predictNextPeriod = () => {
    const lastDate = new Date(lastPeriodDate);
    const cycle = parseInt(cycleLength, 10);
    const daysBetweenInt = parseInt(daysBetween, 10);

    if (isNaN(lastDate.getTime()) || isNaN(cycle) || isNaN(daysBetweenInt)) {
      alert('Please enter valid input');
      return;
    }

    const nextPeriodDate = new Date(lastDate.getTime() + (cycle * 24 * 60 * 60 * 1000));
    const predictedDate = new Date(nextPeriodDate.getTime() + (daysBetweenInt * 24 * 60 * 60 * 1000));

    setPredictedDate(predictedDate.toDateString());
  };

  return (
    <div className='tracker'>
      <h2>Period Cycle Predictor</h2>
      <div>
        <label>Last Period Date:</label>
        <input
          type="date"
          value={lastPeriodDate}
          onChange={(e) => setLastPeriodDate(e.target.value)}
        />
      </div>
      <div>
        <label>Period Cycle Length (in days):</label>
        <input
          type="number"
          value={cycleLength}
          onChange={(e) => setCycleLength(e.target.value)}
        />
      </div>
      <div>
        <label>Days Between Periods:</label>
        <input
          type="number"
          value={daysBetween}
          onChange={(e) => setDaysBetween(e.target.value)}
        />
      </div>
      <button onClick={predictNextPeriod} className='button'>Predict Next Period</button>
      {predictedDate && (
        <div className='result'>
          <h3>Predicted Next Period Date:</h3>
          <p>{predictedDate}</p>
        </div>
      )}
    </div>
  );
};

export default PeriodPrediction;
