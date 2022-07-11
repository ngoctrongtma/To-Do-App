import { connect } from 'react-redux';
import AppToDo from '../component/AppToDo';
import { handleAddToDo, handleToggleToDo, handleDeleteToDo } from '../redux/todoSlice';
import store from '../redux/store'

const mapStateToProps = (state) => { // map state of redux to props of conponent
    return {
        todos: state.listToDo.list
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleAddToDo: (jobName) => dispatch(handleAddToDo(jobName)),
        handleToggleToDo: (jobID) => dispatch(handleToggleToDo(jobID)),
        handleDeleteToDo: (jobID) => dispatch(handleDeleteToDo(jobID))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AppToDo);