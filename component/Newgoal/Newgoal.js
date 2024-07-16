import React from "react";
import './Newgoal.css'
const NewGoal = props => {
    const addGoalHandler = event => {
        event.preventDefault()
        const newGoal ={
            Id:Math.random().toString(),
            text:document.getElementsByTagName('input')[0].value

        }
        props.onAddGoal(newGoal)
    }
    return (
        <form class="new-goal" onSubmit={addGoalHandler}>
            <input type="text"/>
            <button type="submit">Add Goal</button>
        </form>
    )
}

export default NewGoal