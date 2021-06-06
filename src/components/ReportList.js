import { Col, Row, Image} from "react-bootstrap";

const ReportList = ({reports}) => {
    return ( 
        <div className="reportlist">
                {reports.map((report) => (
                    <Row className="mt-2">
                        <Col sm={5}>
                            <Image className="imgCenter" alt={report.uid} src={report.imageUrl} thumbnail />
                        </Col>
                        <Col sm={7}>
                            <p>{report.address_components.city}</p>
                        </Col>
                    </Row>
            ))}
        </div>
     );
}
 
export default ReportList;