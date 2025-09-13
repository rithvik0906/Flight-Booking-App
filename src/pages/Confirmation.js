import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useBookings } from '../context/BookingsContext';
import Ticket from '../components/Ticket';


export default function Confirmation() {
const { id } = useParams();
const { bookings } = useBookings();
const booking = bookings.find(b => b.id === parseInt(id, 10));


if (!booking) return (
<div className="card p-4">
<h4>Booking not found</h4>
<Link to="/">Go back to search</Link>
</div>
);

return (
<div>
<h2 className="mb-3">Booking Confirmed</h2>
<div className="mb-3">Your booking was successful. Use the Booking ID to manage your trip.</div>
<Ticket booking={booking} />
<div className="mt-3">
<Link to="/dashboard" className="btn btn-outline-primary me-2">Go to My Bookings</Link>
<Link to="/" className="btn btn-secondary">Search again</Link>
</div>
</div>
);
}