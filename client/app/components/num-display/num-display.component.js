import React from 'react';
import PropTypes from 'prop-types';

export default function NumDisplay(props) {
  return (
    <div className="row btn-row">
      <form className="col s12">
        <div className="row">
          <div className="input-field col s12">
            <input disabled value={props.numbers} id="num-display-input" type="text" />
          </div>
        </div>
      </form>
    </div>
  );
}

NumDisplay.propTypes = {
  numbers: PropTypes.string,
};

NumDisplay.defaultProps = {
  numbers: '',
};
