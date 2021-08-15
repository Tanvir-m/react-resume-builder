import { Row, Col } from 'react-bootstrap';
import style from '../css/style.module.scss';
import Language from '../Language/Language';
import { ProgBar, Out } from '../css/Style';
import { useContext } from 'react';
import { Context } from '../../context/Context';
import { SubmitContext } from '../../context/Submit';

const Skills = () => {
  const ContextStore = useContext(Context);
  const SubmitStore = useContext(SubmitContext);

  const displaySkills =
    SubmitStore.isSubmit &&
    ContextStore.skills.skillList.map((item, index) => (
      <>
        <Row className="mt-3" key={index}>
          <Col md={2}>{item.valOne}</Col>
          <Col md={9}>
            <Out>
              <ProgBar
                className="progress-bar-striped progress-bar-animated"
                per={item.valTwo}
              />
            </Out>
          </Col>
          <Col md={1}>{item.valTwo}%</Col>
        </Row>
      </>
    ));

  return (
    <Row>
      <Col md={{ span: 11, offset: 1 }}>
        <Row className="pb-5">
          <Col md={6}>
            <h2 className={`${style.quick} pt-5 pb-3 mr-5`}>SKILLS</h2>
            <Row>
              <Col md={{ span: 11 }}>{displaySkills}</Col>
            </Row>
          </Col>
          <Col md={6}>
            <h2 className={`${style.quick} pt-5 pb-3 mr-5`}>LANGUAGES</h2>
            <Language />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Skills;
