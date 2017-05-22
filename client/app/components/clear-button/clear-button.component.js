import React from 'react';
import PropTypes from 'prop-types';

export default function ClearButton(props) {
  return (
    <div className="col s4 offset-s4 num-button">
      <button
        className="btn grey lighten-5 grey-text text-darken-1"
        onClick={() => props.onClick()}
      >
        Clear
      </button>
    </div>
  );
}

ClearButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
