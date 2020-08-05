import React from "react";
import PropTypes from "prop-types";
import "./Alert.css";

const Alert = ({ showAlert }) => {
  return <div className="alert">{showAlert}</div>;
};

Alert.propTypes = {
  showAlert: PropTypes.string.isRequired,
};

export default Alert;
