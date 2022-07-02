import React from "react";

export const ContactPicker = ({ contacts, setContact }) => {
  return (
    <select onChange={(e) => setContact(e.target.value)}>
      <option selected="selected" value={"select contact"} key={-1} disabled>
        No Contact Selected
      </option>
      {contacts.map((contact, index) => {
        return (
          <option key={index} value={contact.name}>
            {contact.name}
          </option>
        );
      })}
    </select>
  );
};
