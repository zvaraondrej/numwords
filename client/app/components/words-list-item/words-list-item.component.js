import React from 'react';

export default function WordsListItem() {
  return (
    <div className="row">
      <div className="col s12">
        <div className="card-panel grey lighten-5 z-depth-1">

          <div className="row valign-wrapper">

            <div className="col s2 center-align">
              <div className="valign-wrapper">
                <i className="valign material-icons">account_circle</i>
              </div>
            </div>

            <div className="col s10">
              <span className="black-text">
                User name: {this.props.word}
              </span>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
