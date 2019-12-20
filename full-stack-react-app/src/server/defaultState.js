export const defaultState = {
    users:[{
        id:"U1",
        name:'dev'
    },
    {
        id:"U2",
        name:'QA'
    },
    {
        id:"U3",
        name:'admin'
    }],
    groups:[{
        name:"TO DO",
        id:"G1",
        owner:"U1"
    },
    {
        name:"Doing",
        id:"G2",
        owner:"U2"
    },
    {
        name:"Done",
        id:"G3",
        owner:"U3"
    }],
    tasks:[{
        name:"Do tests",
        id:"T1",
        group:"G1",
        owner:"U1",
        complete:false
    },{
        name:"Complete Homework",
        id:"T2",
        group:"G2",
        owner:"U2",
        complete:false
    },{
        name:"Meet old Friend",
        id:"T3",
        group:"G3",
        owner:"U3",
        complete:true
    },{
        name:"Pick up grocery",
        id:"T4",
        group:"G1",
        owner:"U1",
        complete:false
    },{
        name:"Put up laundry",
        id:"T5",
        group:"G2",
        owner:"U3",
        complete:false
    }],
    comments:[{
        owner:"U1",
        id:'C1',
        task:'T1',
        content:'Great Work!!'
    },
    {
        owner:"U2",
        id:'C2',
        task:'T2',
        content:'Keep it up!!'
    },
    {
        owner:"U3",
        id:'C3',
        task:'T4',
        content:'Can improve, just ok'
    }]
}