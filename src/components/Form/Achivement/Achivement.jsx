import { useContext } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Context } from '../../../context/Context';
import { Button } from '../../css/Style';
import { AiTwotoneDelete } from 'react-icons/ai';
import style from '../../css/style.module.scss';

const Achivement = () => {
  const ContextStore = useContext(Context);

  const achivement = ContextStore.achivement;
  const achivementList = ContextStore.achivement.echList;
  const setAchivementList = ContextStore.achivement.setEchList;

  const avhivementOnChangeHandler = (val, index) => {
    achivementList[index].valOne = val;
    setAchivementList(achivementList);
  };

  const achivementDesOnChangeHandler = (val, index) => {
    achivementList[index].valTwo = val;
    setAchivementList(achivementList);
  };

  const addClickHandler = () => {
    achivement.addClickhandler(achivementList, setAchivementList);
  };

  const deleteClickHandler = (index) => {
    achivement.deleteClickHandler(index, achivementList, setAchivementList);
  };
  return (
    <Row className="">
      <h3 className="">Achivment</h3>
      <Col md={12} className="">
        <Row>
          {achivementList &&
            achivementList.map((item, index) => (
              <>
                <Row key={index}>
                  <Col md={12} className="pb-3">
                    <input
                      type="text"
                      className="form-control"
                      deafultValue={item.valOne}
                      onChange={(e) =>
                        avhivementOnChangeHandler(e.target.value, index)
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
                          achivementDesOnChangeHandler(e.target.value, index)
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
          <Button onClick={addClickHandler}>Add</Button>
        </Row>
      </Col>
    </Row>
  );
};

export default Achivement;
