import React from 'react';
import PropTypes from 'prop-types';

import NumButton from './../num-button/num-button.component';
import ClearButton from './../clear-button/clear-button.component';

export default class Keypad extends React.Component {
  renderButton(index) {
    const buttons = this.props.buttons;
    return (
      <div className="col s4 num-button">
        <NumButton
          value={buttons[index].value}
          text={buttons[index].text}
          onClick={() => this.props.onNumBtnClick(index)}
        />
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className="row btn-row">
          {this.renderButton(0)}
          {this.renderButton(1)}
          {this.renderButton(2)}
        </div>
        <div className="row btn-row">
          {this.renderButton(3)}
          {this.renderButton(4)}
          {this.renderButton(5)}
        </div>
        <div className="row btn-row">
          {this.renderButton(6)}
          {this.renderButton(7)}
          {this.renderButton(8)}
        </div>
        <div className="row btn-row">
          <ClearButton onClick={() => this.props.onClearBtnClick()} />
        </div>
      </div>
    );
  }
}

Keypad.propTypes = {
  onNumBtnClick: PropTypes.func.isRequired,
  onClearBtnClick: PropTypes.func.isRequired,
  buttons: PropTypes.any,
};

Keypad.defaultProps = {
  value: '',
  text: '',
  buttons: [],
};
