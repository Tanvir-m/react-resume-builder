import { Row, Col } from 'react-bootstrap';
import style from '../css/style.module.scss';
import { useContext } from 'react';
import { SubmitContext } from '../../context/Submit';
import { Context } from '../../context/Context';

const Header = () => {
  const ContextStore = useContext(Context);
  const SubmitStore = useContext(SubmitContext);
  return (
    <>
      <Row className={`${style.head} mt-5`}>
        <Col md={{ span: 6, offset: 2 }}>
          {SubmitStore.isSubmit && (
            <>
              <h1 className={`${style.quick}`}>
                {ContextStore.personalOverview.name}
              </h1>
            </>
          )}

          {/* <p className={`${style.atkin}`}>CREATIVE DIRECTOR</p> */}
        </Col>
        <Col md={4}>
          {SubmitStore.isSubmit && (
            <>
              <h4 className={`${style.atkin}`}>
                +91 {ContextStore.personalOverview.number}
              </h4>
              <h4 className={`${style.atkin}`}>
                {ContextStore.personalOverview.email}
              </h4>
            </>
          )}
        </Col>
      </Row>
    </>
  );
};

export default Header;
