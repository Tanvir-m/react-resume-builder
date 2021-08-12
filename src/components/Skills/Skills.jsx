import { Row, Col } from "react-bootstrap";
import style from "../css/style.module.scss";
import Language from "../Language/Language";
import {ProgBar, Out} from '../css/Style';

const Skills = () => {
    return (
        <Row>
        <Col md={{ span: 10, offset: 1 }}>


          <Row className="pb-5">
            <Col md={6}>
            <h2 className={`${style.quick} pt-5 pb-3 mr-5`}>SKILLS</h2>
              <Row >
                  <Col md={{span:10, offset:1}}>
                    <Row className="mt-3">
                      <Col md={2}>HTML</Col>
                      <Col md={9}>
                          <Out>
                            <ProgBar /> 
                          </Out>
                      </Col>
                      <Col md={1}>70%</Col>
                    </Row>
                    <Row className="mt-3">
                      <Col md={2}>HTML</Col>
                      <Col md={9}>
                          <Out>
                            <ProgBar /> 
                          </Out>
                      </Col>
                      <Col md={1}>70%</Col>
                    </Row>
                    <Row className="mt-3">
                      <Col md={2}>HTML</Col>
                      <Col md={9}>
                          <Out>
                            <ProgBar /> 
                          </Out>
                      </Col>
                      <Col md={1}>70%</Col>
                    </Row>
                  </Col>
              </Row>
              
            </Col>
            <Col md={6}>
            <h2 className={`${style.quick} pt-5 pb-3 mr-5`}>LANGUAGES</h2>
              <Language />
            </Col>
            
          </Row>
        </Col>
      </Row>
    )
}

export default Skills
