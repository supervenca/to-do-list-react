import {Form, Button, Row, Col} from 'react-bootstrap';

const FormAddTask = (props) => {
    return(
        
        <Form>
            <Row>
                <Form.Label>New task for {props.deadline}</Form.Label>
                <Col>
                    <Form.Control type="text" placeholder="Enter new task" />
                </Col>
                <Col>
                    <Button variant="primary">ADD</Button>
                </Col>
            </Row>
            
        </Form>
        
    )
}

export default FormAddTask;