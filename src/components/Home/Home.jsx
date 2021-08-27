import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from '../css/style.module.scss';
import { Button } from '../css/Style';
import About from '../About/About';
import PersonalOverview from '../PersonalOverview/PersonalOverview';
import Education from '../Education/Education';
import Achivements from '../Achivements/Achivements';
import Experience from '../Experience/Experience';
import Skills from '../Skills/Skills';
import Form from '../Form/Form/Form';
import SubmitContextCom from '../../context/Submit';
import Context from '../../context/Context';
import JsPdf from 'jspdf';

const Home = () => {
  const [display, setDisplay] = useState(true);

  const toggle = () => setDisplay(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [display]);

  const genPdf = () => {
    const doc = new JsPdf('p', 'pt', 'a4');
    doc.html(document.querySelector('#content'), {
      callback: (pdf) => {
        pdf.save('resume.pdf');
      },
    });
  };
  return (
    <>
      <Container className={style.home}>
        <SubmitContextCom>
          <Context>
            {display && <Form tog={toggle} />}
            {!display && (
              <>
                <div id="content">
                  <Header />
                  <About />
                  <PersonalOverview />
                  <Education />
                  <Experience />
                  <Achivements />
                  <Skills />
                </div>
                <center>
                  <Button sub onClick={genPdf} className="my-5">
                    Genarate PDF
                  </Button>
                </center>
              </>
            )}
          </Context>
        </SubmitContextCom>
      </Container>
    </>
  );
};

export default Home;
