import React from 'react';
import { formatPrice } from '../utils/helpers';


export default function Ticket({ booking }) {
if (!booking) return null;

return (
<div className="card card-ticket p-3">
<div className="d-flex justify-content-between">
<div>
<h5 className="mb-1">{booking.flight.airline} — {booking.flight.flightNumber}</h5>
<div className="small text-muted">{booking.flight.from} → {booking.flight.to}</div>
</div>
<div className="text-end">
<div className="fw-bold">{formatPrice(booking.totalPrice)}</div>
<div className="small text-muted">{booking.passengers} pax • {booking.flightClass}</div>
</div>
</div>


<hr />
<div className="row">
<div className="col-md-6">
<div><strong>Passenger:</strong> {booking.passengerInfo.name}</div>
<div><strong>Email:</strong> {booking.passengerInfo.email}</div>
<div><strong>Phone:</strong> {booking.passengerInfo.phone}</div>
</div>
<div className="col-md-6 text-end">
<div><strong>Depart:</strong> {booking.departDate || '—'}</div>
<div><strong>Return:</strong> {booking.returnDate || '—'}</div>
<div className="mt-2 small text-muted">Booking ID: {booking.id}</div>
</div>
</div>
</div>
);
}