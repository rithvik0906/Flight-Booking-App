import React, { useState } from "react";
import { useBookings } from "../context/BookingsContext";
import { Card, Button } from "react-bootstrap";

const Dashboard = () => {
  const { bookings, cancelBooking } = useBookings();
  const [showCancel, setShowCancel] = useState(false);

  return (
    <div className="container mt-4">
      <h2>My Bookings</h2>
      {showCancel && (
        <div className="my-3">
          <div className="alert alert-warning" role="alert">
            Booking cancelled successfully.
          </div>
        </div>
      )}
      {bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        bookings.map((b) => (
          <Card key={b.id} className="mb-3 shadow-sm">
            <Card.Body>
              <Card.Title>{b.flight.airline}</Card.Title>
              <Card.Text>
                {b.flight.from} → {b.flight.to}
                <br />
                Passenger: {b.passengerInfo?.name}
                {b.departDate && (
                  <>
                    <br />
                    Date: {b.departDate}
                  </>
                )}
              </Card.Text>
              <Button
                variant="danger"
                onClick={() => {
                  cancelBooking(b.id);
                  setShowCancel(true);
                  setTimeout(() => setShowCancel(false), 1500);
                }}
              >
                Cancel Booking
              </Button>
            </Card.Body>
          </Card>
        ))
      )}
    </div>
  );
};

export default Dashboard;
