import React from "react";
import SingleContact from "../SingleContact/SingleContact";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useSelector } from "react-redux";
import "./AllContacts.css";

const AllContacts = () => {
  const contacts = useSelector((state) => state.items);
  const inputFilter = useSelector((state) => state.filter);

  const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(inputFilter)
  );

  return (
    <TransitionGroup component="ul">
      {filterContacts.map(({ name, number, id }) => (
        <CSSTransition key={id} timeout={250} classNames="listItem">
          <SingleContact name={name} number={number} id={id} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default AllContacts;
