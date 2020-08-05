import React from "react";
import styles from "./FilterContacts.module.css";
import { useDispatch } from "react-redux";
import { filterEdit } from "../../redux/actions/filterAction";

const FilterContacts = () => {
  const dispatch = useDispatch();

  const editFilter = ({ target }) => {
    dispatch(filterEdit(target.value.toLowerCase()));
  };

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        type="text"
        placeholder="Find contacts by name"
        onChange={editFilter}
      ></input>
    </div>
  );
};

export default FilterContacts;
