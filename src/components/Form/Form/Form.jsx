
import PersonalOverview from '../PersonalOverview/PersonalOverview';
import {Row, Col} from 'react-bootstrap';
import Education from '../Education/Education';
import Achivement from '../Achivement/Achivement';
import Experience from '../../Form/Experience/Experience';
import PersonalViewpoint from "../../Form/PersonalViewpoint/PersonalViewpoint";
import Skills from '../Skills/Skills';
import Languages from '../Languages/Languages';
import { useEffect } from 'react';

const Form = (props)=>{
    
    return(
        <>
        <Row>
            <Col md={4}>
                <PersonalOverview />
            </Col>
            
            <Col md={4}>
                <PersonalViewpoint />
                <Skills />
                <Languages />
            </Col>
            <Col md={4}>
                <Education />
                <Achivement />
                <Experience />
            </Col>
        </Row>
            
        </>
    )
}

export default Form;