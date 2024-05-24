import React, { useState } from 'react';
import '../styles/FitnessTrackerApp.css';

const FitnessTrackerApp = () => {
  const [exercises, setExercises] = useState([]);
  const [exercise, setExercise] = useState('');
  const [duration, setDuration] = useState('');

  const addExercise = () => {
    if (exercise && duration) {
      setExercises([...exercises, { exercise, duration }]);
      setExercise('');
      setDuration('');
    }
  };

  return (
    <div className="app">
      <h1>Fitness Tracker</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Exercise"
          value={exercise}
          onChange={(e) => setExercise(e.target.value)}
        />
        <input
          type="text"
          placeholder="Duration (mins)"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
        <button onClick={addExercise}>Add Exercise</button>
      </div>
      <div className="exercise-list">
        {exercises.map((item, index) => (
          <div key={index} className="exercise-item">
            <span>{item.exercise}</span>
            <span>{item.duration} mins</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FitnessTrackerApp;
