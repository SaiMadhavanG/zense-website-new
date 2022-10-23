import React from 'react';
import {Card,Button} from 'react-bootstrap';
import '../static/OngoingEvents.css';
import visit from '../assets/visit.svg';


const OngoingEventsCard = (props) => {
    const data = props.data.data;
    return(
        <div>
            <Card className="ongoing-events-card">
            <Card.Body className="ongoing-events-card-body">
                <Card.Title className="ongoing-events-card-title">
                    { data.title }
                </Card.Title>
                <Card.Subtitle className="mb-2 ongoing-events-card-subtitle">
                    { data.date }
                </Card.Subtitle>
                <Card.Text className="ongoing-events-card-text">
                    { data.text }
                </Card.Text>
                <Button className="ongoing-events-card-button">
                    <Card.Link href={ data.link } className="ongoing-events-card-button-text">
                        <img src={visit} alt="visit"/>
                    </Card.Link>
                </Button>
            </Card.Body>
            </Card>
        </div>
    )
}

export default OngoingEventsCard;