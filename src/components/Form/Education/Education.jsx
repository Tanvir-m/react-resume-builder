import {Row, Col} from 'react-bootstrap';
import { Button } from '../../css/Style';

const Education = () => {
    return (
        <>
            <Row className="py-5">
            <h3 className="py-4">Education</h3>
                <Col md={12}>
                    <Row>
                       <Col md={12} className="pb-3">
                            <input type="text" className="form-control" placeholder="Education" />
                        </Col> 
                       <Col md={12} className="py-3">
                            <textarea  className="form-control" rows="3" placeholder="Description"></textarea>   
                        </Col> 
                        <Button>Add</Button>
                    </Row>
                    
                    
                </Col>
            </Row>
        </>
    )
}

export default Education
