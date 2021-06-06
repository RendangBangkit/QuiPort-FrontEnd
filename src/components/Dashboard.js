/* eslint-disable array-callback-return */
import { useEffect, useState } from "react";
import LineChart from "./Linechart";
import ReportList from './ReportList';
import { Card, Container, Col, Row } from "react-bootstrap";

const Dashboard = ({ reports }) => {
    const [dsbData, setdsbData] = useState(null)

    useEffect(() => {
        let dsbData = []
        const now = new Date().toLocaleDateString()
        
        reports.filter((report) => {

            if (report.hasOwnProperty('ai_results')) {
                let date = report.createdAt
    
                let myDate = new Date(date).toLocaleDateString()
                return myDate === now
            }
        }).map((report) => {
                
            let uid = report.uid;
            let address_components = report.address_components;
            let imageUrl = report.imageUrl;
            let date = new Date(report.createdAt);
            let hours = date.getHours()
            let minutes = date.getMinutes()
            let time = hours +" : "+ minutes
        
            let fire = report.ai_results.detected_class.fire
            let accident = report.ai_results.detected_class.accident
        
            dsbData.push({
                uid,
                date,
                time,
                fire,
                accident,
                address_components,
                imageUrl
            })
        })

        return setdsbData(dsbData.sort((a, b) => {
            return new Date(a.date) - new Date(b.date) 
        }))
    }, [reports])

    return (
        <div className="dashboard">
            {dsbData && <LineChart data={dsbData} title="Realtime Detected Fire And Accident"/>}
            <Card className="mt-4" border="light">
                <Card.Header>
                    <h4 style={{textAlign: "center"}}>Today's Report</h4>
                </Card.Header>
                    <Card.Body>
                        {dsbData && <ReportList reports={dsbData} />}
                    </Card.Body>
            </Card>
        </div>
    )
}

export default Dashboard