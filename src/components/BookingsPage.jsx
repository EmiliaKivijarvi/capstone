import React, { useReducer } from 'react';
import BookingForm from './bookings/BookingForm';
import BookingTable from './bookings/BookingTable';

// Action types
const ADD_BOOKING = 'ADD_BOOKING';

// Reducer function for bookings
const reducer = (state, action) => {
  switch (action.type) {
    case ADD_BOOKING:
      return { ...state, bookings: [...state.bookings, action.payload] };
    default:
      return state;
  }
};

const initialState = {
  bookings: [],
};

export default function BookingsPage() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <BookingForm state={["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]} dispatch={dispatch} />
      <BookingTable bookings={state.bookings} /> {/* Display bookings */}
    </>
  );
}
