import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import propTypes from 'prop-types';

const PersonalViewpoint = (props) => {
  return (
    <>
      <Row className="pt-5">
        <h3 className="py-4">Personal Viewpoint</h3>
        <Col md={12} className="pb-3">
          <textarea
            className="form-control"
            rows="5"
            placeholder="About You"
          ></textarea>
        </Col>
      </Row>
    </>
  );
};

PersonalViewpoint.propTypes = {
  sendAboutData: propTypes.func,
};

export default PersonalViewpoint;
