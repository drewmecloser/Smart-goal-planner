import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

function GoalForm({ onAddGoal }) {
    const [name, setName] = useState('');
    const [targetAmount, setTargetAmount] = useState('');
    const [category, setCategory] = useState('');
    const [deadline, setDeadline] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !targetAmount || !category || !deadline) {
            alert('Please fill in all fields');
            return;
        }
        const newGoal = {
            id: uuidv4(),
            name,
            targetAmount: parseFloat(targetAmount),
            savedAmount: 0,
            category,
            deadline,
            createdAt: new Date().toISOString().split('T')[0],

        };

        onAddGoal(newGoal);

        setName('');
        setTargetAmount('');
        setCategory('');
        setDeadline('');
    };

    return (
        <div className="goal-form">
            <h2>Add New Goal</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Goal Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="targetAmount">Target Amount:</label>
                    <input
                        type="number"
                        id="targetAmount"
                        value={targetAmount}
                        onChange={(e) => setTargetAmount(e.target.value)}
                        min="0"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="category">Category:</label>
                    <input
                        type="text"
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="deadline">Deadline:</label>
                    <input
                        type="date"
                        id="deadline"
                        value={deadline}
                        onChange={(e) => setDeadline(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Add Goal</button>
            </form>
        </div>
    );
}

export default GoalForm;