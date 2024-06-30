import React from "react";

const Contact = ({ item, index }) => {
  const { fullname, phone, email, address } = item;
  return (
    <div>
      <p>{fullname}</p>
      <p>{phone}</p>
      <p>{email}</p>
      <p>{address}</p>
    </div>
  );
};

export default Contact;
