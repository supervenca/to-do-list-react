import { Component } from 'react';
import {Form, Button, Row, Col} from 'react-bootstrap';

class FormAddTask extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: '',
            checked: ''
        }
    }
    onValueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.text, this.state.checked);
        this.setState({
            text: '',
            checked: ''
        })
    }
    render(){
        const {text} = this.state;
        return(
            <Form onSubmit = {this.onSubmit}>
                <Row>
                    <Form.Label>New task</Form.Label>
                    <Col>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter new task" 
                            name="text"
                            value={text}
                            onChange={this.onValueChange}
                        />
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