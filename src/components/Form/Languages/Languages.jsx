import { Button } from '../../css/Style';
import { Row, Col } from 'react-bootstrap';
import { AiTwotoneDelete } from 'react-icons/ai';
import style from '../../css/style.module.scss';
import { useContext } from 'react';
import { Context } from '../../../context/Context';

const Languages = () => {
  const ContextStore = useContext(Context);

  const language = ContextStore.language;
  const langList = language.langList;
  const setLangList = language.setLangList;

  const addClickhandler = () => {
    language.addClickhandler(langList, setLangList);
  };

  const skillHandleChange = (val, index) => {
    langList[index].valOne = val;
    setLangList(langList);
  };

  const perHandleChange = (val, index) => {
    langList[index].valTwo = val;
    setLangList(langList);
  };

  const deleteClickHandler = (index) => {
    language.deleteClickHandler(index, langList, setLangList);
  };

  const inputFeild =
    language.langList &&
    language.langList.map((item, index) => (
      <>
        <Row key={index}>
          <Col md={8}>
            <input
              type="text"
              className="form-control"
              placeholder="Language"
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
        <h3 className="py-4">language</h3>
        {inputFeild}
        <Button onClick={addClickhandler}>Add</Button>
      </Row>
    </>
  );
};

export default Languages;
