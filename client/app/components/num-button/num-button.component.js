import React from 'react';

export default class NumButton extends React.Component {

  render() {
    return (
      <button className="btn grey lighten-5" onClick={() => this.props.onClick()}>
        <p className="grey-text text-darken-4">{this.props.value}</p>
        <p className="grey-text text-darken-1"><sub>{this.props.text}</sub></p>
      </button>
    );
  }
}
