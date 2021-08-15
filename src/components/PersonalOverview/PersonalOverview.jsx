import { useContext } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Context } from '../../context/Context';
import { SubmitContext } from '../../context/Submit';
import style from '../css/style.module.scss';

const PersonalOverview = () => {
  const ContextStore = useContext(Context);
  const SubmitStore = useContext(SubmitContext);
  return (
    <>
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <h2 className={`${style.quick} pt-5 pb-3 mr-5`}>PERSONAL OVERVIEW</h2>

          <Row className="py-4">
            <Col md={4} className="mt-3">
              <div className={style.bor}>
                <h5 className={`${style.atkin}`}>NAME:</h5>
                {SubmitStore.isSubmit && (
                  <>
                    <p>{ContextStore.personalOverview.name}</p>
                  </>
                )}
              </div>
            </Col>
            <Col md={4} className="mt-3">
              <div className={style.bor}>
                <h5 className={`${style.atkin}`}>EMAIL:</h5>
                {SubmitStore.isSubmit && (
                  <>
                    <p>{ContextStore.personalOverview.email}</p>
                  </>
                )}
              </div>
            </Col>
            <Col md={4} className="mt-3">
              <div className={style.bor}>
                <h5 className={`${style.atkin}`}>NUMBER:</h5>
                {SubmitStore.isSubmit && (
                  <>
                    <p>{ContextStore.personalOverview.number}</p>
                  </>
                )}
              </div>
            </Col>
            <Col md={4} className="mt-3">
              <div className={style.bor}>
                <h5 className={`${style.atkin}`}>DATE OF BIRTH:</h5>
                {SubmitStore.isSubmit && (
                  <>
                    <p>{ContextStore.personalOverview.dob}</p>
                  </>
                )}
              </div>
            </Col>
            <Col md={4} className="mt-3">
              <div className={style.bor}>
                <h5 className={`${style.atkin}`}>RELATIONSHEEP:</h5>
                {SubmitStore.isSubmit && (
                  <>
                    <p>{ContextStore.personalOverview.relationSheep}</p>
                  </>
                )}
              </div>
            </Col>
            <Col md={4} className="mt-3">
              <div className={style.bor}>
                <h5 className={`${style.atkin}`}>NATIONALITY:</h5>
                {SubmitStore.isSubmit && (
                  <>
                    <p>{ContextStore.personalOverview.nationality}</p>
                  </>
                )}
              </div>
            </Col>
            <Col md={4} className="mt-3">
              <div className={style.bor}>
                <h5 className={`${style.atkin}`}>GITHUB:</h5>
                {SubmitStore.isSubmit && (
                  <>
                    <a
                      href={ContextStore.personalOverview.git}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <p>{ContextStore.personalOverview.git}</p>
                    </a>
                  </>
                )}
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default PersonalOverview;
