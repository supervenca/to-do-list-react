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
    this.maxId = 8;
  }
  deleteItem = (id) => {
    this.setState(({today, week, month}) =>{
      return {
        today: today.filter(item => item.id !== id), 
        week: week.filter(item => item.id !== id),
        month: month.filter(item => item.id !== id)
      }
    })
  }

  addItemDay = (text) => {
    const newItem = {
      text: text,
      checked: '',
      id: this.maxId++
    }
    this.setState(({today}) => {
      const newArr = [...today, newItem]
      return {
          today: newArr
      }
    });
  }
  addItemWeek = (text) => {
    const newItem = {
      text: text,
      checked: '',
      id: this.maxId++
    }
    this.setState(({week}) => {
      const newArr = [...week, newItem]
      return {
          week: newArr
      }
    });
  }
  addItemMonth = (text) => {
    const newItem = {
      text: text,
      checked: '',
      id: this.maxId++
    }
    this.setState(({month}) => {
      const newArr = [...month, newItem]
      return {
          month: newArr
      }
    });
  }
  onToggleChecked = (id) => {
    this.setState(({today}) =>({
      today: today.map(item => {
        if(item.id === id && item.checked === 'checked'){
          return {...item, checked: ''}
        }
        if(item.id === id && item.checked === ''){
          return {...item, checked: 'checked'}
        }
        return item;
      })
    }))
  }

  render(){
    const {today, week, month} = this.state;

    return (
      <>
        <Container className="m-5 p-3 rounded mx-auto bg-light shadow">
        <Header name="Task List"/>
        <Row>
          <Col>
            <Subheader name="Tasks for today"/>
            <List 
              data={today} 
              onDelete={this.deleteItem}
              onToggleChecked={this.onToggleChecked}
            />
          </Col>
          <Col>
            <Subheader name="Tasks for the week"/>
            <List 
              data={week} 
              onDelete={this.deleteItem}
            />
          </Col>
          <Col>
            <Subheader name="Tasks for the month"/>
            <List 
              data={month} 
              onDelete={this.deleteItem}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <FormAddTask onAdd={this.addItemDay}/>
          </Col>
          <Col>
            <FormAddTask onAdd={this.addItemWeek}/>
          </Col>
          <Col>
            <FormAddTask onAdd={this.addItemMonth}/>
          </Col>
        </Row>
        </Container>
        
      </>
    )
  }
}

export default App;
