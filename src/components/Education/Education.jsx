import { useContext } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Context } from '../../context/Context';
import { SubmitContext } from '../../context/Submit';
import style from '../css/style.module.scss';

const Education = () => {
  const ContextStore = useContext(Context);
  const SubmitStore = useContext(SubmitContext);

  const displayEducation =
    SubmitStore.isSubmit &&
    ContextStore.eduaction.eduList.map((item, index) => (
      <>
        <Row className="py-4" key={index}>
          <Col md={4}>
            <div className={style.bor}>
              <h5 className={`${style.atkin}`}>{item.valOne}</h5>
            </div>
          </Col>
          <Col md={8}>
            <p className={`${style.atkin}`}>{item.valTwo}</p>
          </Col>
        </Row>
      </>
    ));
  return (
    <Row>
      <Col md={{ span: 10, offset: 1 }}>
        <h2 className={`${style.quick} pt-5 pb-3 mr-5`}>EDUCATION</h2>
        {displayEducation}
      </Col>
    </Row>
  );
};

export default Education;
