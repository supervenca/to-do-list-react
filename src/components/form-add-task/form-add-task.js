import { Component } from 'react';
import {Form, Button, Row, Col} from 'react-bootstrap';

class FormAddTask extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: '',
            deadline: 'today'
        }
    }
    onValueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    onDeadlineChange = (e) => {
        this.setState({deadline: e.target.value})
    }
    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.text.length < 3) {return};
        this.props.onAdd(this.state.text, this.state.deadline);
        this.setState({
            text: '',
            deadline: 'today'
        })
    }
    render(){
        const {text, deadline} = this.state;
        return(
            <Form onSubmit = {this.onSubmit}>
                <Row>
                    <Form.Label>Add new task</Form.Label>
                    <Col className='mb-3' sm={12} md={6}>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter new task" 
                            name="text"
                            value={text}
                            onChange={this.onValueChange}
                        />
                    </Col>
                    <Col className='mb-3' sm={12} md={3}>
                        <Form.Select
                        value={deadline}
                            onChange={this.onDeadlineChange}>
                            <option selected value='today'>For today</option>
                            <option value='week'>For this week</option>
                            <option value='month'>For this month</option>
                        </Form.Select>
                    </Col>
                    <Col>
                        <Button 
                        variant="primary"
                        type="submit">ADD</Button>
                    </Col>
                </Row>
            </Form>
        )
    }
}

export default FormAddTask;