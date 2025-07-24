import React from 'react'
import GoalItem from './components/GoalItem';

function GoalList({ goals, onUpdateGoal, onDeleteGoal }) {
    return (
        <div className="goal-list">
            <h2>Your Savings Goals</h2>
            {goals.map((goal) => (
                <GoalItem key={goal.id} goal={goal} onUpdateGoal={onUpdateGoal} />
            ))}
        </div>
    )
}

export default GoalList;
