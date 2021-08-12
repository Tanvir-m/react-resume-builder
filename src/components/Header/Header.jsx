import {Row, Col} from 'react-bootstrap';
import style from '../css/style.module.scss'

const Header = () => {
    return (
        <>
            <Row className={`${style.head} mt-5`}>
                <Col md={{span:6, offset:2}}>
                    <h2 className={`${style.quick}`}>DEAN ANDERSON</h2>
                    <p className={`${style.atkin}`}>CREATIVE DIRECTOR</p>
                </Col>
                <Col md={4}>
                    <p className={`${style.atkin}`}>+91 9876543210</p>
                    <p className={`${style.atkin}`}>information@gmail.com</p>
                </Col>
            </Row>
        </>
    )
}

export default Header
