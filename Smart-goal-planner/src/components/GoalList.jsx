import React from 'react';
import GoalCard from './GoalCard'; 

function GoalList({ goals, onUpdateGoal, onDeleteGoal }) {
    return (
        <div className="goal-list">
            <h2>Your Savings Goals</h2> 
            {goals.map((goal) => (
                <GoalCard
                    key={goal.id}
                    goal={goal}
                    onUpdateGoal={onUpdateGoal}
                    onDeleteGoal={onDeleteGoal} 
                />
            ))}
        </div>
    );
}

export default GoalList;