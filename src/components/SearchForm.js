import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const SearchForm = ({ onSearch, cities }) => {
  const today = new Date().toISOString().split('T')[0];
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState(today);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ from, to, date: date || today });
  };

  let toOptions = cities;
  if (from) {
    const flights = window.flightsData || [];
    toOptions = Array.from(new Set(flights.filter(f => f.from === from).map(f => f.to)));
    if (toOptions.length === 0) toOptions = cities;
  }

  return (
    <Form onSubmit={handleSubmit} className="p-3 border rounded bg-light shadow-sm">
      <Row>
        <Col>
          <Form.Select
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            required
          >
            <option value="">From</option>
            {cities.map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </Form.Select>
        </Col>
        <Col>
          <Form.Select
            value={to}
            onChange={(e) => setTo(e.target.value)}
          >
            <option value="">To</option>
            {toOptions.map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </Form.Select>
        </Col>
        <Col>
          <Form.Control
            type="date"
            value={date}
            min={today}
            onChange={(e) => setDate(e.target.value)}
          />
        </Col>
        <Col>
          <Button type="submit">Search</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchForm;
