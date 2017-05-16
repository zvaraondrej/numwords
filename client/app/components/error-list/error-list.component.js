import React from 'react';

export default class ErrorList extends React.Component {

  render() {
    return (
      <div className="item-list row btn-row grey lighten-4 valign-wrapper">

        {this.props.errors.map(error => (
          <div key={error} className="row center-align err-msg">
            <p className="valign grey-text text-darken-1">{error.msg}</p>
          </div>
        ))}

      </div>
    );
  }
}
