import { useState } from 'react';
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
import { Button } from '../css/Style';

const Home = () => {
  return (
    <>
      <Container className={style.home}>
        <Form />

        <Button>Submit</Button>
        <Header />
        <About />
        <PersonalOverview />
        <Education />
        <Experience />
        <Achivements />
        <Skills />
      </Container>
    </>
  );
};

export default Home;
