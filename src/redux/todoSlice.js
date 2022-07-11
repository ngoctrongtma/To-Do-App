
// declare action const
const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const DELETE_TODO = "DELETE_TODO";

const initToDoState = {
    list: []
}
// action creator
const handleAddToDo = (jobName) => {
    return {
        type: ADD_TODO,
        payload: jobName
    }
}
const handleToggleToDo = (jobID) => { // set isDone property for job in listToDo.
    return {
        type: TOGGLE_TODO,
        payload: jobID,
    }
}

const handleDeleteToDo = (jobID) => { // set isDone property for job in listToDo.
    return {
        type: DELETE_TODO,
        payload: jobID,
    }
}


const todoRedeucer = (state = initToDoState, action) => {
    // note: state and action
    switch (action.type) {
        case ADD_TODO: {
            console.log("list", state.list, "length", state.list.length);
            let listLength = state.list.length;

            const newJob = {
                jobID: listLength === 0 ? 0 : state.list[listLength - 1].jobID + 1,
                name: action.payload,
                isDone: false,
            }
            return {
                ...state,
                list: [...state.list, newJob]
            }
        }
        case TOGGLE_TODO: {
            const listTemp = [...state.list];
            for (let i = 0; i < listTemp.length; i++) {
                if (listTemp[i].jobID === action.payload) {
                    listTemp[i].isDone = !listTemp[i].isDone;
                }
            }
            return {
                ...state,
                list: listTemp
            }
        }
        case DELETE_TODO: {
            console.log("delete job");
            const listTemp = [...state.list];
            const valueToDelete = action.payload;
            console.log("list to delete:", listTemp, "value delete", valueToDelete)
            const newList = listTemp.filter(item => item.jobID !== valueToDelete);
            console.log("list after delete:", newList);
            return {
                ...state,
                list: newList
            }
        }

        default: return state;
    }
}
export { handleAddToDo, handleToggleToDo, handleDeleteToDo }
export default todoRedeucer;