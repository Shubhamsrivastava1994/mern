import React from 'react';
import { useState } from 'react';
import './App.css'
import GoalList from './component/goallist/GoalList'
import NewGoal from './component/Newgoal/Newgoal';
const App = () => {
  const [goalCourse ,setCourseGole ] = useState([
    {id:'cg1',text:'complete the HTML course'},
    {id:'cg2',text:'complete the CSS course'},
    {id:'cg3',text:'complete the REACT course'},
    {id:'cg4',text:'complete the HSX course'},
  ])
  const addNewGoalHandler =(newGoal)=>{
    setCourseGole(goalCourse.concat(newGoal))
    // goalCourse.push(newGoal);
    console.log("hiiiiiiiii",goalCourse)
  }
  return (
    <div className='course-goal'>
      <h1>course</h1>
      <NewGoal onAddGoal ={addNewGoalHandler}/>
       <GoalList goal = {goalCourse}/>
    </div>
  )
};

export default App;
