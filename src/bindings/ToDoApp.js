import { connect } from 'react-redux';
import AppToDo from '../component/AppToDo';
import { handleAddToDo } from '../redux/todoSlice';
import store from '../redux/store'

const mapStateToProps = (state) => { // map state of redux to props of conponent
    return {
        todos: state.listToDo.list
    }
}
const mapActionToProps = {
    addToDo: handleAddToDo
}
export default connect(mapStateToProps, mapActionToProps)(AppToDo);