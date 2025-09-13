import React, { useState } from "react";
import SearchForm from "../components/SearchForm";
import FlightsList from "../components/FlightsList";
import flightsData from "../data/flights";

const Booking = () => {
  const [filteredFlights, setFilteredFlights] = useState(flightsData);

  const cities = Array.from(
    new Set([
      ...flightsData.map(f => f.from),
      ...flightsData.map(f => f.to)
    ])
  ).sort();

  const handleSearch = ({ from, to, date }) => {
    const today = new Date().toISOString().split('T')[0];
    const searchDate = date || today;
    let results = flightsData;

    if (from && to) {
      results = results.filter(f => f.from === from && f.to === to);
    } else if (from) {
      results = results.filter(f => f.from === from);
    } else if (to) {
      results = results.filter(f => f.to === to);
    }

    if (searchDate === today) {
      const now = new Date();
      const pad = n => n.toString().padStart(2, '0');
      const currentTime = pad(now.getHours()) + ':' + pad(now.getMinutes());
      results = results.filter(f => {
        return f.departure >= currentTime;
      });
    }

    setFilteredFlights(results);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Flight Search</h2>
      <SearchForm onSearch={handleSearch} cities={cities} />
      <div className="mt-4">
        <FlightsList flights={filteredFlights} />
      </div>
    </div>
  );
};

export default Booking;
