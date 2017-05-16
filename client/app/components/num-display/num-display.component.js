import React from 'react';

export default class NumDisplay extends React.Component {

  render() {
    return (
      <div className="row btn-row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input disabled value={this.props.numbers} id="num-display-input" type="text" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
