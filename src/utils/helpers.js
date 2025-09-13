import dayjs from 'dayjs';


export function formatPrice(amount) {
return `₹ ${amount.toLocaleString()}`;
}


export function computePrice(basePrice, passengers, flightClass) {
const multiplier = flightClass === 'Business' ? 1.6 : 1.0;
const total = Math.round(basePrice * multiplier * passengers);
return total;
}


export function formatDuration(mins) {
const h = Math.floor(mins / 60);
const m = mins % 60;
return `${h}h ${m}m`;
}


export function formatDate(iso) {
return dayjs(iso).format('DD MMM YYYY');
}