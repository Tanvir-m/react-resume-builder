import { Row, Col } from 'react-bootstrap';
import style from '../css/style.module.scss';
import { useContext } from 'react';
import { SubmitContext } from '../../context/Submit';
import { Context } from '../../context/Context';

const About = (props) => {
  const ContextStore = useContext(Context);
  const SubmitStore = useContext(SubmitContext);
  return (
    <>
      <Row className="py-5">
        <Col md={{ span: 10, offset: 1 }}>
          <h2 className={`${style.quick} pt-5 pb-3 mr-5`}>
            PERSONAL VIEWPOINT
          </h2>

          <Row className="py-4">
            <Col md={4}>
              <div className={style.bor}>
                <h4 className={`${style.atkin}`}>A SHORT INTRO</h4>
              </div>
            </Col>
            <Col md={8}>
              {SubmitStore.isSubmit && (
                <>
                  <p className={`${style.atkin}`}>{ContextStore.about.about}</p>
                </>
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default About;
