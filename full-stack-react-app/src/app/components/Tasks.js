import React from 'react';
import {connect} from 'react-redux';
import {requestTaskCreation} from '../store/mutations';
import {Link} from 'react-router-dom';

const Tasks = ({tasks,name,id,createNewTask})=>{
    const taskRender = tasks.map((task)=>{
        return(
            <Link to={`/task/${task.id}`} key={task.id}>
                <div >{task.name}</div>
            </Link>
            
        )
    })
    return(
        <div>
            <h3>{name}</h3>
            <div>{taskRender}</div>
            <button onClick={()=>createNewTask(id)}>Add New</button>
        </div>

    )
}
function mapStateToProps(state,ownProps){
    let groupdID = ownProps.group.id;
    return{
        name:ownProps.group.name,
        id:groupdID,
        tasks:state.tasks.filter((task)=>task.group===groupdID)
    }
}
function mapDispatchToProps(dispatch,ownProps){
    return{
        createNewTask(id){
            console.log("Creating New Task:"+id);
            dispatch(requestTaskCreation(id))
        }
    }
}
export const ConnectedTasks = connect(mapStateToProps,mapDispatchToProps)(Tasks);
