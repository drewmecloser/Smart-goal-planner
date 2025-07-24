import React, { useState } from 'react';
import EditGoalForm from './EditGoalForm'; 

function GoalItem({ goal, onUpdateGoal, onDeleteGoal }) { 
  const [depositAmount, setDepositAmount] = useState('');
  const [isEditing, setIsEditing] = useState(false); 

  const progress = (goal.savedAmount / goal.targetAmount) * 100;
  const remainingAmount = goal.targetAmount - goal.savedAmount;

  
  const today = new Date();
  const deadlineDate = new Date(goal.deadline);
  const timeDiff = deadlineDate.getTime() - today.getTime();
  const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  let status = '';
  if (progress >= 100) {
    status = 'Completed';
  } else if (daysLeft <= 30 && daysLeft > 0) {
    status = 'Warning: Deadline approaching!';
  } else if (daysLeft <= 0 && progress < 100) {
    status = 'Overdue';
  }

  const handleDeposit = () => {
    const amount = parseFloat(depositAmount);
    if (isNaN(amount) || amount <= 0) {
      alert('Please enter a valid deposit amount.');
      return;
    }

    const updatedGoal = {
      ...goal,
      savedAmount: goal.savedAmount + amount,
    };
    onUpdateGoal(updatedGoal);
    setDepositAmount('');
  };

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete "${goal.name}"?`)) {
      onDeleteGoal(goal.id);  
    }
  };

  return (
    <div className="goal-item">
      {isEditing ? (
        <EditGoalForm
          goal={goal}
          onUpdateGoal={onUpdateGoal}
          onCancelEdit={() => setIsEditing(false)}
        />
      ) : (
        <>
          <h3>{goal.name}</h3>
          <p>Category: {goal.category}</p>
          <p>Target: ${goal.targetAmount.toLocaleString()}</p>
          <p>Saved: ${goal.savedAmount.toLocaleString()}</p>
          <p>Remaining: ${remainingAmount.toLocaleString()}</p>
          <div className="progress-bar-container">
            <div
              className="progress-bar"
              style={{ width: `${Math.min(100, progress)}%` }}
            ></div>
          </div>
          <p>{progress.toFixed(2)}% Achieved</p>
          <p>Deadline: {goal.deadline}</p>
          {status && <p className={`status ${status.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>{status}</p>}

          <div className="deposit-section">
            <input
              type="number"
              placeholder="Deposit amount"
              value={depositAmount}
              onChange={(e) => setDepositAmount(e.target.value)}
              min="0"
            />
            <button onClick={handleDeposit}>Make Deposit</button>
          </div>
          <div className="goal-actions">
            <button onClick={() => setIsEditing(true)}>Edit Goal</button>
            <button onClick={handleDelete} className="delete-button">Delete Goal</button>
          </div>
        </>
      )}
    </div>
  );
}

export default GoalItem;