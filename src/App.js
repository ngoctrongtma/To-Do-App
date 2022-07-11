import ToDoApp from './bindings/ToDoApp'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//======================================
function App() {
  return (
    <div className="App">
      <ToDoApp></ToDoApp>
      <ToastContainer />
    </div >
  );
}

export default App;
