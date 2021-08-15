import { Row, Col } from 'react-bootstrap';
import { Button } from '../../css/Style';
// import { useState } from 'react';
import { AiTwotoneDelete } from 'react-icons/ai';
import style from '../../css/style.module.scss';
import { useContext } from 'react';
import { Context } from '../../../context/Context';

const Skills = () => {
  const ContextStore = useContext(Context);

  const skills = ContextStore.skills;
  const skillList = skills.skillList;
  const setSkillList = skills.setSkillList;

  const addClickhandler = () => {
    skills.addClickhandler(skillList, setSkillList);
  };

  const skillHandleChange = (val, index) => {
    skillList[index].valOne = val;
    setSkillList(skillList);
  };

  const perHandleChange = (val, index) => {
    skillList[index].valTwo = val;
    setSkillList(skillList);
  };

  const deleteClickHandler = (index) => {
    skills.deleteClickHandler(index, skillList, setSkillList);
  };

  const inputFeild =
    skillList &&
    skillList.map((item, index) => (
      <>
        <Row key={index}>
          <Col md={8}>
            <input
              type="text"
              className="form-control"
              placeholder="Skill"
              defaultValue={item.valOne}
              onChange={(e) => skillHandleChange(e.target.value, index)}
            />
          </Col>
          <Col md={3} className="pb-4">
            <input
              type="number"
              className="form-control"
              placeholder="%"
              defaultValue={item.valTwo}
              onChange={(e) => perHandleChange(e.target.value, index)}
            />
          </Col>
          <Col md={1} className="pb-4">
            <AiTwotoneDelete
              className={`${style.skillDeleteIcon}`}
              onClick={() => deleteClickHandler(index)}
            />
          </Col>
        </Row>
      </>
    ));
  return (
    <>
      <Row>
        <h3 className="py-4">Skills</h3>
        {inputFeild}
        <Button onClick={addClickhandler}>Add</Button>
      </Row>
    </>
  );
};

export default Skills;
