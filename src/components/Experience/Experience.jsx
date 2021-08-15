import { useContext } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Context } from '../../context/Context';
import { SubmitContext } from '../../context/Submit';
import style from '../css/style.module.scss';

const Experience = () => {
  const ContextStore = useContext(Context);
  const SubmitStore = useContext(SubmitContext);
  return (
    <>
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          
          {ContextStore.experience.expList.length>0 && (
<h2 className={`${style.quick} pt-5 pb-3 mr-5`}>EXPERIENCE</h2>
          )}
          {SubmitStore.isSubmit &&
            ContextStore.experience.expList.map((item, index) => (
              <>
                <Row className="py-4">
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
            ))}
        </Col>
      </Row>
    </>
  );
};

export default Experience;
