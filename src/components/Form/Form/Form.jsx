import PersonalOverview from '../PersonalOverview/PersonalOverview';
import { Row, Col } from 'react-bootstrap';
import Education from '../Education/Education';
import Achivement from '../Achivement/Achivement';
import Experience from '../../Form/Experience/Experience';
import PersonalViewpoint from '../../Form/PersonalViewpoint/PersonalViewpoint';
import Skills from '../Skills/Skills';
import Languages from '../Languages/Languages';
import { Button } from '../../css/Style';
import { useContext } from 'react';
import { SubmitContext } from '../../../context/Submit';

const Form = (props) => {
  const SubmitStore = useContext(SubmitContext);

  const submitOnClickHandler = () => {
    props.tog();
    SubmitStore.Submit();
  };
  return (
    <>
      <Row className="py-4">
        <Col md={4}>
          <PersonalOverview />
        </Col>

        <Col md={4}>
          <PersonalViewpoint />
          <Skills />
          <Languages />
        </Col>
        <Col md={4}>
          <Education />
          <Achivement />
          <Experience />
        </Col>

        <Button sub onClick={submitOnClickHandler} className="mb-5">
          Submit
        </Button>
      </Row>
    </>
  );
};

export default Form;
