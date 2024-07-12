import React from 'react';
import './App.css'
import GoalList from './component/goallist/GoalList'
import NewGoal from './component/Newgoal/Newgoal';
const App = () => {
  const goalCourse = [
    {id:'cg1',text:'complete the HTML course'},
    {id:'cg2',text:'complete the CSS course'},
    {id:'cg3',text:'complete the REACT course'},
    {id:'cg4',text:'complete the HSX course'}
  ]
  return (
    <div className='course-goal'>
      <h1>course</h1>
      <GoalList goal = {goalCourse}/>
      <NewGoal/>
    </div>
  )
};

export default App;
