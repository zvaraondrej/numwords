import React from 'react';
import PropTypes from 'prop-types';

export default function NumButton(props) {
  return (
    <button className="btn grey lighten-5" onClick={() => props.onClick()}>
      <p className="grey-text text-darken-4">{props.value}</p>
      <p className="grey-text text-darken-1"><sub>{props.text}</sub></p>
    </button>
  );
}

NumButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.number,
  text: PropTypes.string,
};

NumButton.defaultProps = {
  value: null,
  text: '',
};
