import React from 'react';

const BookingTable = ({ bookings }) => {
  return (
    <div>
      <h2>Booking Data</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Guests</th>
            <th>Occasion</th>
          </tr>
        </thead>
        <tbody>
          {bookings.length > 0 ? (
            bookings.map((booking, index) => (
              <tr key={index}>
                <td>{booking.resDate}</td>
                <td>{booking.resTime}</td>
                <td>{booking.guests}</td>
                <td>{booking.occasion}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No bookings yet</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BookingTable;
