import React from 'react';
import PropTypes from 'prop-types';
import WordsListItem from './../words-list-item/words-list-item.component';

export default function WordsList(props) {
  return (
    <div
      className={`item-list row btn-row grey lighten-4 ${props.words && props.words.length < 1 ? 'valign-wrapper' : ''}`}
    >

      {props.words && props.words.length > 0
        ? <div className="col s12">
          <div>
            {this.props.words.map(word => <WordsListItem key={word} word={word} />)}
          </div>
        </div>
        : <div className="row center-align err-msg">
          <p className="valign grey-text text-darken-1">No data yet</p>
        </div>}
    </div>
  );
}

WordsList.propTypes = {
  words: PropTypes.array,
};

WordsList.defaultProps = {
  words: [],
};
