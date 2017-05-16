import React from 'react';
import WordsListItem from './../words-list-item/words-list-item.component';

export default class WordsList extends React.Component {

  render() {
    return (
      <div className={`item-list row btn-row grey lighten-4 ${this.props.words && this.props.words.length < 1 ? 'valign-wrapper' : ''}`}>

        { this.props.words && this.props.words.length > 0 ? (

          <div className="col s12">
            <div>
              {this.props.words.map(word => (
                <WordsListItem key={word} word={word} />
              ))}
            </div>
          </div>

        ) : (

          <div className="row center-align err-msg">
            <p className="valign grey-text text-darken-1">No data yet</p>
          </div>
        )}
      </div>
    );
  }
}
