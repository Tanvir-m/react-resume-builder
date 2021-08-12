import { Button } from '../../css/Style';
import {Row, Col} from 'react-bootstrap';

const Languages = () => {
    return (
        <Row>
            <h3 className="py-4">Languages</h3>
            <Col md={10}>
                <input type="text" className="form-control" placeholder="Language" />
            </Col>
            <Col md={2} className="pb-4">
                <input type="num" className="form-control" placeholder="%" />
            </Col>
            <Button>Add</Button>
        </Row>
    )
}

export default Languages
