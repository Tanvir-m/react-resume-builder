import { Row, Col } from "react-bootstrap";
import style from "../css/style.module.scss";
import {ProgBar, Out} from '../css/Style';

const Language = () => {
    return (
        <Row>
        <Col md={{ span: 10, offset: 1 }}>

        <Row >
                  <Col md={{span:12}}>
                    <Row className="mt-3">
                      <Col md={2}>ENGLISH</Col>
                      <Col md={9}>
                          <Out>
                            <ProgBar /> 
                          </Out>
                      </Col>
                      <Col md={1}>70%</Col>
                    </Row>
                    <Row className="mt-3">
                      <Col md={2}>ENGLISH</Col>
                      <Col md={9}>
                          <Out>
                            <ProgBar /> 
                          </Out>
                      </Col>
                      <Col md={1}>70%</Col>
                    </Row>
                    <Row className="mt-3">
                      <Col md={2}>ENGLISH</Col>
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
      </Row>
    )
}

export default Language
