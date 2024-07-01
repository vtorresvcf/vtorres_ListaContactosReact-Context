import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";
import { FaPhoneAlt, FaAddressCard } from "react-icons/fa";

const Contact = ({ item, index }) => {
  const { name, phone, email, address } = item;
  return (
    <div>
      <ul className="list-group m-2 ">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          {name}
          <span className="badge bg-danger rounded-pill">
            <BsPersonCircle />
          </span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          {phone}
          <span className="badge bg-danger rounded-pill">
            <FaPhoneAlt />
          </span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          {email}

          <span className="badge bg-danger rounded-pill">
            <MdOutlineEmail />
          </span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          {address}
          <span className="badge bg-danger rounded-pill">
            <FaAddressCard />
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
