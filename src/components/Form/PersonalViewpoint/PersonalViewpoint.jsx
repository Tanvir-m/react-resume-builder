import { Row, Col } from 'react-bootstrap';
import { useContext } from 'react';
import { Context } from '../../../context/Context';

const PersonalViewpoint = (props) => {
  const ContextStore = useContext(Context);

  return (
    <>
      <Row className="pt-5">
        <h3 className="py-4">Personal Viewpoint</h3>
        <Col md={12} className="pb-3">
          <textarea
            className="form-control"
            rows="5"
            placeholder="About You"
            value={ContextStore.about.about}
            onChange={(e) => ContextStore.about.setAbout(e.target.value)}
          ></textarea>
          {/* <button onClick={aboutClickHandler}>Add about data</button> */}
        </Col>
      </Row>
    </>
  );
};

export default PersonalViewpoint;
