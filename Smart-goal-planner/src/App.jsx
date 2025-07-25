import React, { useState, useEffect } from 'react';
import GoalList from './components/GoalList';
import GoalForm from './components/GoalForm';
import Overview from './components/Overview';
import './App.css';
import './components/GoalCard.css';
import './components/GoalForm.css';
import './components/Overview.css';

function App() {
  const [goals, setGoals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const API_URL = 'https://smart-goal-planner-1-9tjm.onrender.com/goals'; 

  useEffect(() => {
    fetch(API_URL)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setGoals(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
        console.error('Error fetching goals:', error);
      });
  }, []);

  const handleAddGoal = (newGoal) => {
    fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newGoal),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(addedGoal => {
        setGoals(prevGoals => [...prevGoals, addedGoal]);
      })
      .catch(error => {
        console.error('Error adding goal:', error);
      });
  };

  const handleUpdateGoal = (id, updatedGoal, isFullUpdate = false) => {
    const method = isFullUpdate ? 'PUT' : 'PATCH';
    const body = isFullUpdate ? JSON.stringify(updatedGoal) : JSON.stringify({ savedAmount: updatedGoal.savedAmount });

    fetch(`${API_URL}/${id}`, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: body,
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setGoals(prevGoals =>
          prevGoals.map(goal => (goal.id === id ? data : goal))
        );
      })
      .catch(error => {
        console.error('Error updating goal:', error);
      });
  };

  const handleDeleteGoal = (id) => {
    fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        setGoals(prevGoals => prevGoals.filter(goal => goal.id !== id));
      })
      .catch(error => {
        console.error('Error deleting goal:', error);
      });
  };

  if (loading) return <div>Loading goals...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="App">
      <h1>Smart Goal Planner</h1>
      <div className="main-content">
        <Overview goals={goals} />
        <GoalForm onAddGoal={handleAddGoal} />
        <GoalList
          goals={goals}
          onUpdateGoal={handleUpdateGoal}
          onDeleteGoal={handleDeleteGoal}
        />
      </div>
    </div>
  );
}

export default App;