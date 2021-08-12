import {Row, Col} from 'react-bootstrap';
import { Button } from '../../css/Style';

const Achivement = () => {
  return (
    <Row className="">
      <h3 className="">Achivment</h3>
      <Col md={12} className="">
        <Row>
          <Col md={12} className="pb-3">
            <input type="text" className="form-control" />
          </Col>
          <Col md={12} className="py-3">
            <textarea className="form-control" rows="3"></textarea>
          </Col>
          <Button>Add</Button>
        </Row>
      </Col>
    </Row>
  );
};

export default Achivement;
