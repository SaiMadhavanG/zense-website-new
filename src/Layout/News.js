import UpcomingEvents from '../components/UpcomingEvents';
import Timeline from '../components/Timeline';
import OngoingEvents from '../components/OngoingEvents';
import { Container, Row, Col } from 'react-bootstrap';
import '../static/News.css'


function News() {
  return (
    <div id="news-section">
    <div id="upcoming-events">
      <Container fluid>
        <Row >
          <Col >
            <div className="upcoming-event-title">Upcoming Events</div>
          </Col>
        </Row>
        <Row>
          <Col>
            <UpcomingEvents />
          </Col>
        </Row>
      </Container>

      {/* <Container fluid>
        <Row>
          <Col>
            <div className="timeline-title">Our Journey</div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Timeline />
          </Col>
        </Row>

      </Container> */}
    </div>
    <div id="ongoing-events">
      <Container fluid>
        <Row >
          <Col >
            <div className="ongoing-event-title">Ongoing Events</div>
          </Col>
        </Row>
        <Row>
          <Col>
            <OngoingEvents />
          </Col>
        </Row>
      </Container>
      </div>
    </div>

    
  )
}

export default News;