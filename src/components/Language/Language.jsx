import { useContext } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Context } from '../../context/Context';
import { SubmitContext } from '../../context/Submit';
// import style from "../css/style.module.scss";
import { ProgBar, Out } from '../css/Style';

const Language = () => {
  const SubmitStore = useContext(SubmitContext);
  const ContextStore = useContext(Context);

  return (
    <Row>
      <Col md={{ span: 11 }}>
        <Row>
          {SubmitStore.isSubmit &&
            ContextStore.language.langList.map((item, index) => (
              <>
                <Col md={{ span: 12 }}>
                  <Row className="mt-3">
                    <Col md={2}>{item.valOne}</Col>
                    <Col md={9}>
                      <Out>
                        <ProgBar
                          className="progress-bar-striped progress-bar-animated"
                          per={item.valTwo}
                        />
                      </Out>
                    </Col>
                    <Col md={1}>{item.valTwo}%</Col>
                  </Row>
                </Col>
              </>
            ))}
        </Row>
      </Col>
    </Row>
  );
};

export default Language;
