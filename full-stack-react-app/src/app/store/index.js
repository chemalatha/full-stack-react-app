import {createStore,applyMiddleware,combineReducers} from 'redux';
import {defaultState} from '../../server/defaultState';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
import * as sagas from './sagas.mock';
import * as mutations from './mutations';

const store = createStore(
    combineReducers({
        tasks(tasks=defaultState.tasks,action){
            switch(action.type){
                case mutations.CREATE_TASK:
                    console.log(action)
                    return [...tasks,{
                        name:"New Task",
                        id:action.taskID,
                        group:action.groupID,
                        user:action.ownerID
                    }]
                case mutations.SET_TASK_COMPLETE:

                    return tasks.map(  task=>{
                        console.log(task)
                        return (task.id===action.taskID)?{...task,complete:action.isComplete}:task;
                    })
                case mutations.SET_TASK_NAME:
                        return tasks.map(  task=>{
                            console.log(task)
                            return (task.id===action.taskID)?{...task,name:action.name}:task;
                        })
                case mutations.SET_TASK_GROUP:
                                return tasks.map(  task=>{
                                    console.log(task)
                                    return (task.id===action.taskID)?{...task,group:action.groupID}:task;
                                })
     
            }
            return tasks;
        },
        comments(comments = defaultState.comments,action){
            return comments;
        },
        groups(groups=defaultState.groups,action){
            return groups;
        },
        users(users=defaultState.users,action){
            return users;
        }
    }),
    applyMiddleware(createLogger(),sagaMiddleware)

)
for(let saga in sagas){
    sagaMiddleware.run(sagas[saga]);
}
export default store;