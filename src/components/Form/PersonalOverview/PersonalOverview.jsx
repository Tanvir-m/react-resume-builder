import {Row, Col} from 'react-bootstrap';

const PersonalOverview = () => {
    return (
        <>
            <Row className="py-5">
                <h3 className="py-3">Personal Overview</h3>
                <Col md={12} className="py-3">
                    <input type="text" className="form-control" placeholder="Name" />
                </Col>
                <Col md={12} className="py-3">
                    <input type="email" className="form-control" placeholder="Email" />
                </Col>
                <Col md={12} className="py-3">
                    <input type="number" className="form-control" placeholder="Phone" />
                </Col>
                <Col md={12} className="py-3">
                    <input type="text" className="form-control" placeholder="Relationsheep" />
                </Col>
                <Col md={12} className="py-3">
                    <input type="number" className="form-control" placeholder="Date Of birth" />
                </Col>
                <Col md={12} className="py-3">
                    <input type="text" className="form-control" placeholder="Name" />
                </Col>
                <Col md={12} className="py-3">
                    <input type="text" className="form-control" placeholder="Nationality" />
                </Col>
                <Col md={12} className="py-3">
                    <input type="text" className="form-control" placeholder="Github" />
                </Col>
                
            </Row>
        </>
    )
}

export default PersonalOverview
