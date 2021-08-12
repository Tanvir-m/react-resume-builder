import { Container, Row, Col } from 'react-bootstrap';
import style from '../css/style.module.scss';

const About = (props) => {
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
                <p>2016</p>
              </div>
            </Col>
            <Col md={8}>
              <p className={`${style.atkin}`}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default About;
