import {Row, Col} from 'react-bootstrap';
import { Button } from '../../css/Style';

const Skills = () => {
    return (
        <>
            <Row >
                <h3 className="py-4">Skills</h3>
                <Col md={10}>
                    <input type="text" className="form-control" placeholder="Skill" />
                </Col>
                <Col md={2} className="pb-4">
                    <input type="num" className="form-control" placeholder="%" />
                </Col>
                <Button>Add</Button>
            </Row>
        </>
    )
}

export default Skills
