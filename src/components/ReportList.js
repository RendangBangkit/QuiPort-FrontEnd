import { useEffect, useState } from "react";
import { Col, Row, Image} from "react-bootstrap";
import Moment from 'react-moment';
import { FaRegClock, FaMapMarkerAlt, FaUserEdit } from "react-icons/fa";



const ReportList = ({reports}) => {
    const [reportsR, setReportsR] = useState(null)

    useEffect(() => {
        setReportsR(reports.reverse()) 
    }, [reports]);

    return ( 
        <div className="reportlist">
                {reportsR && reportsR
                .map((report) => (
                    <Row className="mt-2">
                        <Col sm={5}>
                            <Image alt={report.uid} src={report.imageUrl} thumbnail />
                        </Col>
                        <Col sm={7}>
                            <div className="mb-1">
                                {report.categories[0] === 'Fire' ? <span className="myBadgeR">Fire</span> : ''}
                                {report.categories[1] === 'Accident' ? <span className="myBadgeB">Accident</span> : ''}
                            </div>
                            <FaRegClock /> <Moment fromNow>{report.date}</Moment>
                            <p style={{
                                marginBottom: 0
                            }}><FaMapMarkerAlt />{report.address_components.address} <a target="_blank" rel="noreferrer" href={'https://maps.google.com/?q='+report.address_components.latitude+","+report.address_components.longitude}>See Location</a></p>
                            <FaUserEdit /> From: {report.email}
                        </Col>
                    </Row>
            ))}
        </div>
     );
}
 
export default ReportList;