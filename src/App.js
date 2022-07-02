import React, { useState } from "react";
import { Routes, Route, Navigate, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  const addContact = (name, phoneNumber, email) => {
    setContacts((savedContacts) => {
      return [{ name, phoneNumber, email }, ...savedContacts];
    });
  };

  const addAppointment = (title, contact, date, time) => {
    setAppointments((savedAppointments) => {
      return [{ title, contact, date, time }, ...savedAppointments];
    });
  };

  return (
    <>
      <nav>
        <NavLink
          to={ROUTES.CONTACTS}
          className={({ isActive }) => {
            return isActive ? "active" : null;
          }}
        >
          Contacts
        </NavLink>
        <NavLink
          to={ROUTES.APPOINTMENTS}
          className={({ isActive }) => {
            return isActive ? "active" : null;
          }}
        >
          Appointments
        </NavLink>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Navigate to={ROUTES.CONTACTS} />} />
          <Route
            path={ROUTES.CONTACTS}
            element={
              <ContactsPage contacts={contacts} addContact={addContact} />
            }
          />

          <Route
            path={ROUTES.APPOINTMENTS}
            element={
              <AppointmentsPage
                contacts={contacts}
                appointments={appointments}
                addAppointment={addAppointment}
              />
            }
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
