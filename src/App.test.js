import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BookingForm from './components/bookings/BookingForm';

test('Renders the BookingForm button', () => {
  render(<MemoryRouter><BookingForm state={[]} dispatch={() => {}} /></MemoryRouter>);
  const makeReservation = screen.getByText("Make Your Reservation");
  expect(makeReservation).toBeInTheDocument();
});

test('Date input works correctly', () => {
  render(<MemoryRouter><BookingForm state={[]} dispatch={() => {}} /></MemoryRouter>);
  const date = screen.getByLabelText(/Choose Date/i); // Correcting the label text to match
  fireEvent.change(date, { target: { value: "2023-04-03" } });
  expect(date.value).toEqual("2023-04-03");
});

test('Time input works correctly', () => {
  render(<MemoryRouter><BookingForm state={["17:00", "18:00", "19:00"]} dispatch={() => {}} /></MemoryRouter>);
  const timeSelect = screen.getByLabelText(/Choose Time/i);
  fireEvent.change(timeSelect, { target: { value: "18:00" } });
  expect(timeSelect.value).toEqual("18:00");
});

test('Guests input works correctly', () => {
  render(<MemoryRouter><BookingForm state={[]} dispatch={() => {}} /></MemoryRouter>);
  const guestsInput = screen.getByLabelText(/Number of Guests/i);
  fireEvent.change(guestsInput, { target: { value: "4" } });
  expect(guestsInput.value).toEqual("4");
});

test('Occasion input works correctly', () => {
  render(<MemoryRouter><BookingForm state={[]} dispatch={() => {}} /></MemoryRouter>);
  const occasionInput = screen.getByLabelText(/Occasion/i);
  fireEvent.change(occasionInput, { target: { value: "Birthday" } });
  expect(occasionInput.value).toEqual("Birthday");
});