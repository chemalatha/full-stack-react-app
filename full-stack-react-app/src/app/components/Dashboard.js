import React from 'react';
import {connect} from 'react-redux';
import {ConnectedTasks} from './Tasks';
 
const Dashboard = ({groups})=>{
    const renderGroups = groups.map((group)=>{
        return(
            <div key={group.id}>
                <ConnectedTasks group={group} />
            </div>
        )
    })
    return(
        <div>
            <h2>Dashboard</h2>
            {renderGroups}
        </div>
    )
}
function mapStateToProps(state){
    return{
        groups:state.groups
    }
}
export const ConnectedDashboard = connect(mapStateToProps)(Dashboard);