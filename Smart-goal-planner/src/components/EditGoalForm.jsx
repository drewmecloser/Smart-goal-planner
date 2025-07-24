import React, { use } from "react";

function EditGoalForm({ goal, onUpdategoal,onCancelEdit}){
    const [name, setName] = useState(goal.name);
    const [targetAmount, setTargetAmount] = useState(goal.targetAmount);
    const [category, setCategory] = useState(goal.category);
    const [deadline, setDeadline] = useState(goal.deadline);

    useEffect(() => {
        setName(goal.name);
        setTargetAmount(goal.targetAmount);
        setCategory(goal.category);
        setDeadline(goal.deadline);
    }, [goal]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !targetAmount || !category || !deadline) {
            alert('Please fill in all fields');
            return;
        }
        const updatedGoal = {
            ...goal,
            name,
            targetAmount: parseFloat(targetAmount),
            category,
            deadline,
        };

        onUpdategoal(updatedGoal);
        onCancelEdit();
    }

    return (
        <div className="edit-goal-form">
            <h3>Edit Goal</h3>
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
                        id="edit-targetAmount"
                        value={targetAmount}
                        onChange={(e) => setTargetAmount(e.target.value)}
                        min="0"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="edit-category">Category:</label>
                    <input
                        type="text"
                        id="edit-category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="edit-deadline">Deadline:</label>
                    <input
                        type="date"
                        id="edit-deadline"
                        value={deadline}
                        onChange={(e) => setDeadline(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Save changes</button>
                <button type="button" onClick={onCancelEdit}>Cancel</button>
            </form>
        </div>
    )
}

export default EditGoalForm;
