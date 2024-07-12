import React from 'react';
const GoalList = props => {
    console.log(props.goal)
    return (
        <ui className='goal-list'>{
           props.goal.map((goalss)=>{
             return <li key={goalss.id}>{goalss.text}</li>
           })
        }
        </ui>
    )
}

export default GoalList

