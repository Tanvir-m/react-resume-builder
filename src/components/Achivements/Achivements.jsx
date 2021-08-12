import { Row, Col } from "react-bootstrap";
import style from "../css/style.module.scss";

const Achivements = () => {
  return (
    <>
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <h2 className={`${style.quick} pt-5 pb-3 mr-5`}>ACHIVEMENT</h2>

          <Row className="py-4">
            <Col md={4}>
              <div className={style.bor}>
                <h5 className={`${style.atkin}`}>EMPLOYEE OF THE MONTH</h5>
                <p>MAY 2016</p>
              </div>
            </Col>
            <Col md={8}>
              <h5 className={`${style.atkin}`}>FOR WEB APPLICATION</h5>
              <p className={`${style.atkin}`}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Achivements;
