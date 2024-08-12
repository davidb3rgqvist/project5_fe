import React, { useEffect, useState } from 'react';
import api from '../api';

function WorkoutList() {
    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        api.get('workouts/')
            .then(response => {
                setWorkouts(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the workouts!', error);
            });
    }, []);

    return (
        <div>
            <h1>Workout Programs</h1>
            <ul>
                {workouts.map(workout => (
                    <li key={workout.id}>
                        <h2>{workout.title}</h2>
                        <p>{workout.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default WorkoutList;
