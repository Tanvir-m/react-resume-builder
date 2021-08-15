import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from '../css/style.module.scss';
import About from '../About/About';
import PersonalOverview from '../PersonalOverview/PersonalOverview';
import Education from '../Education/Education';
import Achivements from '../Achivements/Achivements';
import Experience from '../Experience/Experience';
import Skills from '../Skills/Skills';
import Form from '../Form/Form/Form';
import SubmitContextCom from '../../context/Submit';
import Context from '../../context/Context';

const Home = () => {
  const [display, setDisplay] = useState(true);

  const toggle = () => setDisplay(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [display]);
  return (
    <>
      <Container className={style.home}>
        <SubmitContextCom>
          <Context>
            {display && <Form tog={toggle} />}
            {!display && (
              <>
                <Header />
                <About />
                <PersonalOverview />
                <Education />
                <Experience />
                <Achivements />
                <Skills />
              </>
            )}
          </Context>
        </SubmitContextCom>
      </Container>
    </>
  );
};

export default Home;
