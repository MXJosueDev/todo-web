import { Col, Row } from 'react-grid-system';
import UpdateTasksButton from '../UpdateTasksButton';

export default function TasksInstructions() {
    return (
        <Row className="mb-3">
            <Col xs={18} sm={20} lg={22}>
                <div>
                    <h3 className="text-lg m-0">Your current tasks:</h3>
                    <small>(Click a task title for modify it)</small>
                </div>
            </Col>
            <Col xs={6} sm={4} lg={2}>
                <UpdateTasksButton />
            </Col>
        </Row>
    );
}
