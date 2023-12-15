import { Component } from 'react';
import Header from '../header/header';
import Subheader from '../subheader/subheader';
import List from '../list/list';
import FormAddTask from '../form-add-task/form-add-task';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col} from 'react-bootstrap';

import './app.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      today: [
        {text: 'Remove duplicate tasks and stories', checked: '', id: 1},
        {text: 'Task list and assignments', checked: 'checked', id: 2},
        {text: 'Set due date and assignments', checked: '', id: 3}
      ],
      week: [
        {text: 'Weekly task 1', checked: '', id: 4},
        {text: 'Weekly task 2', checked: '', id: 5}
      ],
      month: [
        {text: 'Monthly task 1', checked: '', id: 6},
        {text: 'Monthly task 2', checked: 'checked', id: 7}
      ]
    }
  }
  render(){
    const {today, week, month} = this.state;

    return (
      <div className="App">
        <Container className="m-5 p-3 rounded mx-auto bg-light shadow">
        <Header name="Task List"/>
        <Row>
          <Col>
            <Subheader name="Tasks for today"/>
            <List data={today}/>
            <FormAddTask deadline="today"/>
          </Col>
          <Col>
            <Subheader name="Tasks for the week"/>
            <List data={week}/>
            <FormAddTask deadline="this week"/>
          </Col>
          <Col>
            <Subheader name="Tasks for the month"/>
            <List data={month}/>
            <FormAddTask deadline="this month"/>
          </Col>
        </Row>
        </Container>
        
      </div>
    )
  }
}

export default App;
