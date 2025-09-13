import React, { useState } from "react";
import FlightCard from "./FlightCard";
import BookingModal from "./BookingModal";

const FlightsList = ({ flights }) => {
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleBook = (flight) => {
    setSelectedFlight(flight);
    setShowModal(true);
  };

  return (
    <>
      {flights.length === 0 ? (
        <div className="text-center text-muted py-4">No flights Available</div>
      ) : (
        flights.map((flight) => (
          <FlightCard key={flight.id} flight={flight} onBook={handleBook} />
        ))
      )}

      <BookingModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        selectedFlight={selectedFlight}
      />
    </>
  );
};

export default FlightsList;
