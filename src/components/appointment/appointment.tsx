import { useState } from "react";
import "./appointment.scss"

export const Appointments = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [symptoms, setSymptoms] = useState('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Add logic to handle the form submission (e.g., API call, data processing)
    console.log('Appointment booked:', { name, email, date, time });
  };
  
  return (
    <div className="appointment">
      <header className="appointment-header">
        <h1>Healthcare Provider Appointment</h1>
        <p>Book your appointments with ease</p>

        <form onSubmit={handleSubmit}>
          <label>
            First Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="First name" required />
          </label>

          <label>
              Last Name:
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Last name" required />
          </label>
          
          <label>
              How do you feel:
            <input type="text" value={symptoms} onChange={(e) => setSymptoms(e.target.value)} placeholder="Symptoms you would like to share with  your care team" required />
          </label>
          

          <label>
            Date:
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
          </label>

          <label>
            Time:
            <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
          </label>

          <button type="submit">Book Appointment</button>
        </form>
      </header>
    </div>

  );
};
