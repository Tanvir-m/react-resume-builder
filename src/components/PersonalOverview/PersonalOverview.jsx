import { Row, Col } from "react-bootstrap";
import style from "../css/style.module.scss";

const PersonalOverview = () => {
  return (
    <>
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <h2 className={`${style.quick} pt-5 pb-3 mr-5`}>PERSONAL OVERVIEW</h2>

          <Row className="py-4">
            <Col md={4}>
              <div className={style.bor}>
                <h5 className={`${style.atkin}`}>NAME:</h5>
                <p>DEAN ANDERSON</p>
              </div>
            </Col>
            <Col md={4}>
              <div className={style.bor}>
                <h5 className={`${style.atkin}`}>EMAIL:</h5>
                <p>demo123@gmail.com</p>
              </div>
            </Col>
            <Col md={4}>
              <div className={style.bor}>
                <h5 className={`${style.atkin}`}>NUMBER:</h5>
                <p>+91 9876543210</p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default PersonalOverview;
