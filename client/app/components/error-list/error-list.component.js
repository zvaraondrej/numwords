import React from 'react';
import PropTypes from 'prop-types';

export default function ErrorList(props) {
  return (
    <div className="item-list row btn-row grey lighten-4 valign-wrapper">

      {props.errors.map(error => (
        <div key={error} className="row center-align err-msg">
          <p className="valign grey-text text-darken-1">{error.msg}</p>
        </div>
      ))}

    </div>
  );
}

ErrorList.propTypes = {
  errors: PropTypes.array,
};

ErrorList.defaultProps = {
  errors: [],
};
