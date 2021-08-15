import { useContext } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Context } from '../../../context/Context';
import { Button } from '../../css/Style';
import { AiTwotoneDelete } from 'react-icons/ai';
import style from '../../css/style.module.scss';

const Experience = () => {
  const ContextStore = useContext(Context);

  const experience = ContextStore.experience;
  const experienceList = ContextStore.experience.expList;
  const setExperienceList = ContextStore.experience.setExpList;

  const experienceOnChangeHandler = (val, index) => {
    experienceList[index].valOne = val;
    setExperienceList(experienceList);
  };

  const experienceDesOnChangeHandler = (val, index) => {
    experienceList[index].valTwo = val;
    setExperienceList(experienceList);
  };

  const addClickHandler = () => {
    experience.addClickhandler(experienceList, setExperienceList);
  };

  const deleteClickHandler = (index) => {
    experience.deleteClickHandler(index, experienceList, setExperienceList);
  };

  return (
    <>
      <Row className="">
        <h3 className="py-4">Experience</h3>
        <Col md={12} className="">
          {experienceList &&
            experienceList.map((item, index) => (
              <>
                <Row key={index}>
                  <Col md={12} className="pb-3">
                    <input
                      type="text"
                      className="form-control"
                      deafultValue={item.valOne}
                      onChange={(e) =>
                        experienceOnChangeHandler(e.target.value, index)
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
                          experienceDesOnChangeHandler(e.target.value, index)
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
              </>
            ))}
          <Row>
            <Button onClick={addClickHandler}>Add</Button>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Experience;
