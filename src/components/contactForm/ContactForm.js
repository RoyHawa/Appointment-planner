import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Phone:
        <input
          type="tel"
          pattern={"^(03|((961){0,1}(3|7\\d{1}|8\\d{1})))\\d{6}"}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};
