import React from 'react';

export default class ClearButton extends React.Component {

  render() {
    return (
      <div className="col s4 offset-s4 num-button">
        <button className="btn grey lighten-5 grey-text text-darken-1" onClick={() => this.props.onClick()}>
          Clear
        </button>
      </div>
    );
  }
}
