import React from "react";
import './Newgoal.css'
const NewGoal = () => {
    const goalArray = []
    const addGoalHandler = event => {
        event.preventDefault()
        const newGoal ={
            Id:Math.random()*"10".toString(),
            text:document.getElementsByTagName('input')[0].value
        }

        console.log(newGoal)
        goalArray.push(newGoal)
        console.log(goalArray)
    }
    return (
        <form class="new-goal" onSubmit={addGoalHandler}>
            <input type="text"/>
            <button type="submit">Add Goal</button>
        </form>
    )
}

export default NewGoal