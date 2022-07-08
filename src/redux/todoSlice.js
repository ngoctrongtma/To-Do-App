
// declare action const
const ADD_TODO = "ADD_TODO";
const UPDATE_TODO = "UPDATE_TODO";
const DELETE_TODO = "DELETE_TODO";
const MARK_COMPLETE = "MARK_COMPLETE";

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

const todoRedeucer = (state = initToDoState, action) => {
    switch (action.type) {
        case ADD_TODO: {
            const newJob = {
                jobID: state.list.length,
                name: action.payload,
                isDone: false,
            }
            return {
                ...state,
                list: [...state.list, newJob]
            }
        }
        case UPDATE_TODO: {

        }
        case DELETE_TODO: {

        }
        case MARK_COMPLETE: {

        }
        default: return state;
    }
}
export { handleAddToDo }
export default todoRedeucer;