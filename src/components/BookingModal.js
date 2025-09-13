import React, { useContext, useState } from "react";
import { Modal, Button, Form, Alert } from "react-bootstrap";
import { useBookings } from "../context/BookingsContext";
import flightsData from "../data/flights";

const BookingModal = ({ show, handleClose, selectedFlight }) => {
  const { addBooking } = useBookings();

  const [passengerName, setPassengerName] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Credit Card");
  const [returnFlight, setReturnFlight] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  if (!selectedFlight) return null;

  const availableReturnFlights = flightsData.filter((f) => {
    if (!selectedFlight.from || !selectedFlight.to) return false;
    return (
      f.from?.toLowerCase() === selectedFlight.to?.toLowerCase() &&
      f.to?.toLowerCase() === selectedFlight.from?.toLowerCase()
    );
  });

  const handleBooking = () => {
    // Get today's date in yyyy-mm-dd format
    const today = new Date().toISOString().split('T')[0];
    // Compose booking object to match Ticket.js expectations
    const booking = {
      id: Date.now(),
      flight: selectedFlight,
      returnFlight,
      passengerInfo: {
        name: passengerName,
        email: '', // Not collected in modal
        phone: '', // Not collected in modal
      },
      passengers: 1, // Only one passenger supported in modal
      flightClass: 'Economy', // Not collected in modal
      departDate: selectedFlight?.date || today,
      returnDate: '', // Not collected in modal
      totalPrice: selectedFlight.price,
      paymentMethod,
    };
    addBooking(booking);
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      handleClose();
    }, 1500);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      {showSuccess && (
        <Alert variant="success" className="m-3">
          Flight booked successfully!
        </Alert>
      )}
      <Modal.Header closeButton>
        <Modal.Title>Book Flight</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>Selected Flight</h5>
        <p>
          {selectedFlight.airline} — {selectedFlight.from} → {selectedFlight.to}
        </p>
        <p>
          Departure: {selectedFlight.departure} | Arrival: {selectedFlight.arrival}
        </p>
        <p>Price: ₹{selectedFlight.price}</p>

        <Form>
          <Form.Group>
            <Form.Label>Passenger Name</Form.Label>
            <Form.Control
              type="text"
              value={passengerName}
              onChange={(e) => setPassengerName(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mt-3">
            <Form.Label>Payment Method</Form.Label>
            <Form.Select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option>Credit Card</option>
              <option>Debit Card</option>
              <option>UPI</option>
            </Form.Select>
          </Form.Group>

          {availableReturnFlights.length > 0 && (
            <Form.Group className="mt-3">
              <Form.Label>Select Return Flight (Optional)</Form.Label>
              <Form.Select
                value={returnFlight?.id || ""}
                onChange={(e) =>
                  setReturnFlight(
                    availableReturnFlights.find(
                      (f) => f.id.toString() === e.target.value
                    )
                  )
                }
              >
                <option value="">No Return Flight</option>
                {availableReturnFlights.map((f) => (
                  <option key={f.id} value={f.id}>
                    {f.airline} — {f.from} → {f.to} ({f.departure} → {f.arrival})
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          )}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleBooking} disabled={!passengerName}>
          Confirm Booking
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BookingModal;
