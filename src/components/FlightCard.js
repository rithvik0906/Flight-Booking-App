import React from "react";
import { Card, Button } from "react-bootstrap";

const FlightCard = ({ flight, onBook }) => {
  const brandImg = `${process.env.PUBLIC_URL}/brands/${flight.airline.toLowerCase().replace(/\s+/g, '-')}.png`;

  return (
    <Card className="mb-3 shadow-sm">
      <Card.Body className="d-flex align-items-center justify-content-between">
        <div>
          <Card.Title>{flight.airline}</Card.Title>
          <Card.Text>
            {flight.from} → {flight.to}
            <br />
            Departure: {flight.departure} | Arrival: {flight.arrival}
            <br />
            Duration: {flight.duration}
          </Card.Text>
          <h5>₹{flight.price}</h5>
          <Button variant="primary" onClick={() => onBook(flight)}>
            Book Now
          </Button>
        </div>
        <img
          src={brandImg}
          alt={flight.airline}
          style={{ maxWidth: 80, maxHeight: 48, objectFit: "contain", marginLeft: 16 }}
        />
      </Card.Body>
    </Card>
  );
};

export default FlightCard;
