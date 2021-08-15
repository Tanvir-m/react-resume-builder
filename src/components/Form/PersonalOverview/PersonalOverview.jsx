import { useContext } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Context } from '../../../context/Context';

const PersonalOverview = (props) => {
  const ContextStore = useContext(Context);
  const Contextdata = ContextStore.personalOverview;
  return (
    <>
      <Row className="py-5">
        <h3 className="py-3">Personal Overview</h3>
        <Col md={12} className="py-3">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            value={Contextdata.name}
            onChange={(e) => Contextdata.setName(e.target.value)}
          />
        </Col>
        <Col md={12} className="py-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={Contextdata.email}
            onChange={(e) => Contextdata.setEmail(e.target.value)}
          />
        </Col>
        <Col md={12} className="py-3">
          <input
            type="number"
            className="form-control"
            placeholder="Phone"
            value={Contextdata.number}
            onChange={(e) => Contextdata.setNumber(e.target.value)}
          />
        </Col>
        <Col md={12} className="py-3">
          <input
            type="text"
            className="form-control"
            placeholder="Relationsheep"
            value={Contextdata.relationSheep}
            onChange={(e) => Contextdata.setRelationSheep(e.target.value)}
          />
        </Col>
        <Col md={12} className="py-3">
          <input
            type="text"
            className="form-control"
            placeholder="Date Of birth"
            value={Contextdata.dob}
            onChange={(e) => Contextdata.setDob(e.target.value)}
          />
        </Col>
        <Col md={12} className="py-3">
          <input
            type="text"
            className="form-control"
            placeholder="Nationality"
            value={Contextdata.nationality}
            onChange={(e) => Contextdata.setNationality(e.target.value)}
          />
        </Col>
        <Col md={12} className="py-3">
          <input
            type="text"
            className="form-control"
            placeholder="Github"
            value={Contextdata.git}
            onChange={(e) => Contextdata.setGit(e.target.value)}
          />
        </Col>
      </Row>
    </>
  );
};

export default PersonalOverview;
