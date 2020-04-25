import React, { useState, useEffect} from 'react';
// import fire from '../config/config';
import Task from './Task'
import {firestore} from '../index'
import ImageUpload from "./ImageUpload"
import '../Home.css'
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from './Footer';
import ApiWeather from './ApiWeather';
import NavBar from '../Navbar/NavBar';


function Home() {

//  const logout = () => {
//     fire.auth().signOut();
//   }

  const [tasks, setTasks] = useState([])

const [name, setName] = useState ('')
const [surname, setSurname] = useState ('')
const [salary, setSalary] = useState('')


  useEffect( () => {
    retriveData()
  })

  const retriveData = () => {
    firestore.collection("tasks").onSnapshot( (snapshot) => {
      console.log(snapshot.docs)
      let myTask = snapshot.docs.map(d =>{
        const {id, name, surname, salary} = d.data()
        console.log(id , name, surname, salary)
        return {id, name, surname, salary}
      })
      setTasks(myTask)
    })
  }

  const deleteTask = (id) => {
    firestore.collection("tasks").doc(id+'').delete()

  }

  const editTask = (id) =>{
    firestore.collection("tasks").doc(id+'').set({id,name,surname,salary})
  }

  const addTask = () => {
    let id =  (tasks.length === 0)?1:tasks[tasks.length-1].id + 1
    firestore.collection("tasks").doc(id+'').set({id,name,surname,salary})
  }

  const renderTask = () => {
    if ( tasks && tasks.length) {
    return tasks.map((tasks, index) =>{
        return (
      <Task key={index} tasks={tasks}
            deleteTask={deleteTask}
            editTask={editTask}
      />
        )
    })
  }
    else{
      return (<div className ='li2'>No Data</div>)
  }
}



    return (
      <div>
        <NavBar/>

        {/* <button className='button3' onClick = {logout}>Sign out</button><br></br>
        <br></br> */}

        <h1 className='h11'>Welcome to my website</h1>
        {/* <h1>Welcome {fire.auth().currentUser.email}</h1> */}
        <div className='container2'>
            <h1>Enter Employee's Information</h1>
            <label htmlFor='name'>Name: </label>
            <input type="text" name="name" onChange={(e) => setName(e.target.value)}/><br /><br />
            <label htmlFor='name'>Surname: </label>
            <input type="text" name="surname" onChange={(e) => setSurname(e.target.value)}/><br /><br />
            <label htmlFor='name'>Salary: </label>
            <input type="number" name="salary" onChange={(e) => setSalary(e.target.value)}/>

            <div className='container'>
              <button onClick={addTask}> Submit </button>

            </div>
          </div >

        <div className='container3'> 
          <h1 className='h1'>Employee List</h1>
          <ul className='container-grid2'>{renderTask()}</ul>
        </div>
        
        <div className='container-grid'>

          <ImageUpload/>
          <div className='container4'>
            <AddTodo />
            <VisibleTodoList />
            <Footer /> 
            <br></br>
          </div>
                <ApiWeather/>
        </div>

        
          

      </div>
    )
}

export default Home;