import React from 'react'
import '../Task.css'



export default (props) =>{
    const {tasks, editTask, deleteTask} = props
    const {id, name, surname, salary} = tasks
 
    return(
        <div>
        <div className='li2'>
                <div className="id">
                    {id}
                </div>
                <div className="name">
                    <p> {name}  {surname}
                    </p>
                </div>
                <div className='salary'>
                        {salary}
                </div>
                <div className='container'>
                    <button onClick={() => editTask(id)}>Edit</button>
                    <button onClick={() => deleteTask(id)}>Delete</button>
                </div>
      </div>
      </div>
    )

}