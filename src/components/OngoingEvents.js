import React from 'react';
import {Row,Col,Container} from 'react-bootstrap';
import '../static/OngoingEvents.css';
import OngoingEventsCard from './OngoingEventsCard';
import oEventData from '../data/events_ongoing.json'


function OngoingEvents() {

  let renderData = [];
  oEventData.forEach(oEvent => {
    renderData.push(<div className="ongoing-events-col" key={oEvent.uid}><OngoingEventsCard data={oEvent} /></div>);
  })

  return (
    <div>
      <Container fluid className="ongoing-events-container">
        <Row className="justify-content-md-center">
          {renderData}
        </Row>
      </Container>
    </div>
    );
}

export default OngoingEvents;