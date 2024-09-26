import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../../styles/bookingForm.css';

export default function BookingForm({ state, dispatch }) {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      resDate: "",
      resTime: "",
      guests: "",
      occasion: "",
    },

    onSubmit: (values) => {
      dispatch({ type: 'ADD_BOOKING', payload: values }); // Dispatching the new booking
      navigate("/confirmed");
    },

    validationSchema: Yup.object({
      resDate: Yup.string().required("Please select a date"),
      resTime: Yup.string().required("Please select a time"),
      guests: Yup.number().min(1, "Please select a number between 1 and 10")
        .max(10, "Please select a number between 1 and 10").required("Please select the number of guests"),
      occasion: Yup.string().required("Please select an occasion"),
    }),
  });

  return (
    <main id='bookingPage'>
      <h2>Booking Form</h2>
      <form
        className="booking-form" // Use CSS class
        onSubmit={formik.handleSubmit}
      >
        <div className="form-group">
          <label htmlFor="res-date">Choose Date <span className="required">*</span></label>
          <input type="date" id="res-date" {...formik.getFieldProps("resDate")} />
          {formik.errors.resDate && formik.touched.resDate && <span className='errorMs'>{formik.errors.resDate}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="res-time">Choose Time <span className="required">*</span></label>
          <select id="res-time" {...formik.getFieldProps("resTime")}>
              <option value="" label="Select Time" />
              {state && state.map(time => (<option key={time} value={time}>{time}</option>))}
          </select>
          {formik.errors.resTime && formik.touched.resTime && <span className='errorMs'>{formik.errors.resTime}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="guests">Number of Guests <span className="required">*</span></label>
          <input type="number" placeholder="1" min="1" max="10" id="guests" {...formik.getFieldProps("guests")} />
          {formik.errors.guests && formik.touched.guests && <span className='errorMs'>{formik.errors.guests}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="occasion">Occasion <span className="required">*</span></label>
          <select id="occasion" {...formik.getFieldProps("occasion")}>
              <option value="" label="Select Occasion" />
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
          </select>
          {formik.errors.occasion && formik.touched.occasion && <span className='errorMs'>{formik.errors.occasion}</span>}
        </div>

        <div className="form-actions">
          <input type="submit" value="Make Your Reservation" aria-label="submit button"
            disabled={!(formik.isValid && formik.dirty)} // Ensure the form is valid
          />
          <button type="button" onClick={formik.handleReset} aria-label="reset button">Reset</button>
        </div>
      </form>
    </main>
  );
}
