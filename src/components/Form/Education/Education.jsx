import { useContext } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Context } from '../../../context/Context';
import { Button } from '../../css/Style';
import { AiTwotoneDelete } from 'react-icons/ai';
import style from '../../css/style.module.scss';

const Education = () => {
  const ContextStore = useContext(Context);

  const education = ContextStore.eduaction;
  const educationList = ContextStore.eduaction.eduList;
  const setEducationList = ContextStore.eduaction.setEduList;

  const educationOnChangeHandler = (val, index) => {
    educationList[index].valOne = val;
    setEducationList(educationList);
  };

  const educationDesOnChangeHandler = (val, index) => {
    educationList[index].valTwo = val;
    setEducationList(educationList);
  };

  const addClickhandler = () => {
    education.addClickhandler(educationList, setEducationList);
  };

  const deleteClickHandler = (index) => {
    education.deleteClickHandler(index, educationList, setEducationList);
  };

  return (
    <>
      <Row className="py-5">
        <h3 className="py-4">Education</h3>
        <Col md={12}>
          {educationList &&
            educationList.map((item, index) => (
              <>
                <Row key={index}>
                  <Col md={12} className="pb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Education"
                      deafultValue={item.valOne}
                      onChange={(e) =>
                        educationOnChangeHandler(e.target.value, index)
                      }
                    />
                  </Col>
                  <Row>
                    <Col md={11} className="py-3">
                      <textarea
                        className="form-control"
                        rows="3"
                        placeholder="Description"
                        deafultValue={item.valTwo}
                        onChange={(e) =>
                          educationDesOnChangeHandler(e.target.value, index)
                        }
                      ></textarea>
                    </Col>
                    <Col md={1} className="pb-4">
                      <AiTwotoneDelete
                        className={`${style.skillDeleteIcon}`}
                        onClick={() => deleteClickHandler(index)}
                      />
                    </Col>
                  </Row>
                </Row>
                <hr />
              </>
            ))}
          <Row>
            <Button onClick={addClickhandler}>Add</Button>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Education;
