/* eslint-disable array-callback-return */
import { useEffect, useState } from "react";
import LineChart from "./Linechart";
import { Container, Nav, Row, Col, Tab, Tabs } from "react-bootstrap";

const Dashboard = ({ reports }) => {
    const [dsbData, setdsbData] = useState(null)
    const [key, setKey] = useState('accident');

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
                accident
            })
        })

        return setdsbData(dsbData.sort((a, b) => {
            return new Date(a.date) - new Date(b.date) 
        }))
    }, [reports])

    return (
        <div className="dashboard">
            {dsbData && <LineChart data={dsbData} title="Realtime Detected Fire And Accident"/>}
            <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
            >
            <Tab eventKey="accident" title="Accident">
                <div>data 1</div>
            </Tab>
            <Tab eventKey="fire" title="Fire">
                <div>Data 2</div>
            </Tab>
            </Tabs>
        </div>
    )
}

export default Dashboard