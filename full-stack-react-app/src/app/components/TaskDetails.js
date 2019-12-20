import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import * as mutations from '../store/mutations';

const TaskDetails = ({id,groups,task,isComplete,setTaskComplete,setTaskGroup,setTaskName})=>{
    return(
        <div>
            <input onChange={(e)=>setTaskName(e)} type="text" value={task.name} />
            <div>
                <button onClick={()=>setTaskComplete(id,!isComplete)}>{isComplete?`ReOpen`:`Complete`}</button>
            </div>
            
            <div>
            <select onChange={(e)=>setTaskGroup(e)} value={task.group}>
                {groups.map((group)=>{
                    return (
                        <option key={group.id} value={group.id}>{group.name}</option>
                    )
                })}
            </select>
            </div>
            <div>
            <Link to="/dashboard">
                <button>Done</button>
            </Link>
            </div>

        </div>
    )  
}

function mapStateToProps(state,ownProps){
    console.log(state);
    console.log(ownProps);
    let id=ownProps.match.match.params.id;
    let task= (state.tasks.filter((task)=>task.id===id))[0];
    let groups = state.groups;
    return {
        id,
        task,
        groups,
        isComplete:task.complete

    }
}
function mapDispatchToProps(dispatch,ownProps){
    const id=ownProps.match.match.params.id;
    return{
        setTaskComplete(id,isComplete){
            dispatch(mutations.setTaskComplete(id,isComplete));
        },
        setTaskGroup(e){
            dispatch(mutations.setTaskGroup(id,e.target.value));
        },
        setTaskName(e){
            dispatch(mutations.setTaskName(id,e.target.value));
        }
    }

}
export const  ConnectedTaskDetails = connect(mapStateToProps,mapDispatchToProps)(TaskDetails);
