import React from "react";

function Overview({ goals }) {
    const totalGoals = goals.length;

    const totalMoneySaved = goals.reduce((sum, goal) => sum + goal.savedAmount, 0);

    const completedGoals = goals.filter(goal => goal.savedAmount >= goal.targetAmount).length;

    return (
        <div className="overview-section">
            <h2>Savings Overview</h2>
            <p>Total Goals: {totalGoals}</p>
            <p>Total Money Saved: ${totalMoneySaved.toLocaleString()}</p>
            <p>Completed Goals: {completedGoals}</p>
        </div>
    );
}

export default Overview;
