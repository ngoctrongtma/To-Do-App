import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import InputGroup from 'react-bootstrap/esm/InputGroup';
import FormControl from 'react-bootstrap/esm/FormControl';
import { ListOutline, CloseOutline, CheckmarkOutline } from 'react-ionicons'
import { useState, useRef } from 'react';
import store from "../redux/store"
//======================================
function AppToDo(props) {
  const [isShow, setIsShow] = useState("All") // isShow have 3 state: All, Finish, Unfinish. default is All. use to show list to do
  const [listToDo, setListToDo] = useState([]); // listToDo contain all job
  const [jobName, setJobName] = useState(""); // save temporary name to add to list to do
  const inputRef = useRef();
  const stringTest = props.todos[0].name;

  function handleAddJob() {
    if (jobName !== "") {
      const newJob = {
        jobID: listToDo.length,
        name: jobName,
        isDone: false,
      }
      const newListToDo = listToDo.concat([newJob]); // create new array contain old listToDo and a new Array have new job
      setListToDo(newListToDo); // set newListToDo for listToDo
      setJobName("");
      inputRef.current.focus();
    }
  }
  function handleToggleJob(jobID) { // set isDone property for job in listToDo.
    const listToDoTemp = [...listToDo];
    const currentJob = listToDoTemp[jobID];
    currentJob.isDone = !currentJob.isDone;
    setListToDo(listToDoTemp);
  }
  return (
    <div className="App">
      <Container className="to-do-app-container">
        <div className="to-do-app-wrap">
          <div className="to-do-app__header">
            <h2>Todos</h2>
          </div>
          <div className="to-do-app__content">
            <div className="show-list-to-do">
              <ul>
                {isShow === "All" ?
                  listToDo.map((item, index) => {
                    return (
                      <li key={index} onClick={() => { handleToggleJob(item.jobID) }}>
                        {item.isDone ?
                          <span className="job-name job-is-done">
                            {item.name}
                          </span>
                          : <span className="job-name">
                            {item.name}
                          </span>
                        }
                        {
                          item.isDone ?
                            <span className="is-done">
                              <CheckmarkOutline
                                color={'#0fcc12'}
                                height="25px"
                                width="25px"
                              />
                            </span>
                            : null
                        }
                      </li>
                    );
                  })
                  : null}
                {isShow === "Finish" ?
                  listToDo.map((item, index) => {
                    if (item.isDone)
                      return (
                        <li key={index} onClick={() => { handleToggleJob(item.jobID) }}>
                          <span className="job-name job-is-done">
                            {item.name}
                          </span>
                          <span className="is-done">
                            <CheckmarkOutline
                              color={'#0fcc12'}
                              height="25px"
                              width="25px"
                            />
                          </span>
                        </li>
                      );
                  }) : null}
                {isShow === "Unfinish" ?
                  listToDo.map((item, index) => {
                    if (!item.isDone)
                      return (
                        <li key={index} onClick={() => { handleToggleJob(item.jobID) }}>
                          <span className="job-name">
                            {item.name}
                          </span>
                        </li>
                      );
                  }) : null}
              </ul>
            </div>
          </div>
          <div className="to-do-app__footer">
            <InputGroup className="input--add_work">
              <FormControl
                ref={inputRef}
                placeholder="Add work in here"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                value={jobName}
                onChange={(e) => {
                  setJobName(e.target.value);
                }}
              />
              <Button variant="success" className="btn--add_work" onClick={() => {
                handleAddJob()
              }}>
                <span>+</span>
              </Button>
            </InputGroup>
            <div className="button-show-to-do-list-wrap">
              <ListOutline
                color={'#0f48cc'}
                height="35px"
                width="35px"
                title="Show to do list"
                className="btn-show"
                onClick={() => {
                  setIsShow("All")
                }}
              />
              <CloseOutline
                color={'#cc0f0f'}
                height="35px"
                width="35px"
                title="Job's not finished."
                className="btn-show"
                onClick={() => {
                  setIsShow("Unfinish")
                }}
              />
              <CheckmarkOutline
                color={'#0fcc12'}
                height="35px"
                width="35px"
                title="Job's finished."
                className="btn-show"
                onClick={() => {
                  setIsShow("Finish")
                }}
              />
            </div>
          </div>
        </div>
      </Container>
    </div >
  );
}

export default AppToDo;
