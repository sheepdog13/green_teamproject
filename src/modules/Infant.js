const initialState = {
    infantList : [
        { name:"철수", age:20221122, gender:"남자"}
    ]
    
}

export const addinfant = (infant) => ({type:"addinfant",payload: infant});

function infant(state = initialState, action){
    switch(action.type) {
        case 'addinfant':
            return {...state, infantList: state.infantList.concat(action.payload)}
        default:
            return state
    }
}

export default infant;