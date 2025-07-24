import React, { useState } from 'react';
import './GoalCard.css';

function GoalCard({ goal, onUpdateGoal, onDeleteGoal }) {
  const { id, name, targetAmount, savedAmount, category, deadline } = goal;
  const [depositAmount, setDepositAmount] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(name);
  const [editTargetAmount, setEditTargetAmount] = useState(targetAmount);
  const [editCategory, setEditCategory] = useState(category);
  const [editDeadline, setEditDeadline] = useState(deadline);

  const remainingAmount = targetAmount - savedAmount;
  const progressPercentage = (savedAmount / targetAmount) * 100;
  const isCompleted = savedAmount >= targetAmount;

  const handleDeposit = () => {
    const amount = parseFloat(depositAmount);
    if (isNaN(amount) || amount <= 0) {
      console.warn('Invalid deposit amount entered.');
      return;
    }

    const updatedSavedAmount = savedAmount + amount;
    const updatedGoal = { ...goal, savedAmount: updatedSavedAmount };
    onUpdateGoal(id, updatedGoal, false);
    setDepositAmount('');
  };

  const handleDelete = () => {
    onDeleteGoal(id);
  };

  const handleEditSubmit = () => {
    if (!editName || !editTargetAmount || !editCategory || !editDeadline) {
      console.warn('Please fill in all fields for editing a goal.');
      return;
    }

    const updatedGoal = {
      ...goal,
      name: editName,
      targetAmount: parseFloat(editTargetAmount),
      category: editCategory,
      deadline: editDeadline,
    };
    onUpdateGoal(id, updatedGoal, true);
    setIsEditing(false);
  };

  const today = new Date();
  const deadlineDate = new Date(deadline);
  const timeDiff = deadlineDate.getTime() - today.getTime();
  const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  let statusMessage = '';
  let statusClass = '';

  if (isCompleted) {
    statusMessage = 'Completed!';
    statusClass = 'status-completed';
  } else if (daysLeft <= 0) {
    statusMessage = 'Overdue!';
    statusClass = 'status-overdue';
  } else if (daysLeft <= 30) {
    statusMessage = `Warning: ${daysLeft} days left!`;
    statusClass = 'status-warning';
  } else {
    statusMessage = `${daysLeft} days left`;
    statusClass = 'status-normal';
  }

  return (
    <div className="goal-card">
      {isEditing ? (
        <div className="edit-form">
          <h3>Edit Goal</h3>
          <div className="form-group">
            <label htmlFor={`edit-name-${id}`}>Goal Name:</label>
            <input
              type="text"
              id={`edit-name-${id}`}
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor={`edit-target-${id}`}>Target Amount:</label>
            <input
              type="number"
              id={`edit-target-${id}`}
              value={editTargetAmount}
              onChange={(e) => setEditTargetAmount(e.target.value)}
              min="0"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor={`edit-category-${id}`}>Category:</label>
            <input
              type="text"
              id={`edit-category-${id}`}
              value={editCategory}
              onChange={(e) => setEditCategory(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor={`edit-deadline-${id}`}>Deadline:</label>
            <input
              type="date"
              id={`edit-deadline-${id}`}
              value={editDeadline}
              onChange={(e) => setEditDeadline(e.target.value)}
              required
            />
          </div>
          <div className="edit-actions">
            <button onClick={handleEditSubmit} className="save-btn">Save Changes</button>
            <button onClick={() => setIsEditing(false)} className="cancel-btn">Cancel</button>
          </div>
        </div>
      ) : (
        <>
          <h3>{name}</h3>
          <p>Category: {category}</p>
          <p>Target: ${targetAmount.toLocaleString()}</p>
          <p>Saved: ${savedAmount.toLocaleString()}</p>
          <p>Remaining: ${remainingAmount.toLocaleString()}</p>
          <p>
            Deadline: {deadline}{' '}
            <span className={`goal-status ${statusClass}`}>({statusMessage})</span>
          </p>

          <div className="progress-bar-container">
            <div
              className="progress-bar-fill"
              style={{ width: `${Math.min(progressPercentage, 100)}%` }}
            ></div>
          </div>
          <p>{progressPercentage.toFixed(2)}% Complete</p>

          {!isCompleted && (
            <div className="deposit-section">
              <input
                type="number"
                placeholder="Deposit amount"
                value={depositAmount}
                onChange={(e) => setDepositAmount(e.target.value)}
                min="0"
              />
              <button className="deposit-btn" onClick={handleDeposit}>
                Deposit
              </button>
            </div>
          )}

          <div className="goal-actions">
            <button className="edit-btn" onClick={() => setIsEditing(true)}>
              Edit
            </button>
            <button className="delete-btn" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default GoalCard;