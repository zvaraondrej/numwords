import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'; 
import * as wordsActions from './../../actions/words.actions';

import WordsList from './../words-list/words-list.component';
import Keypad from './../keypad/keypad.component';
import NumDisplay from './../num-display/num-display.component';

class Home extends React.Component {

  constructor() {
    super();
    this.setButtons();
    this.setNumbers();  
  }

  setButtons(){
    this.buttons = [
      { value: 1, text: '-'},
      { value: 2, text: 'ABC'},
      { value: 3, text: 'DEF'},
      { value: 4, text: 'GHI'},
      { value: 5, text: 'JKL'},
      { value: 6, text: 'MNO'},
      { value: 7, text: 'PQRS'},
      { value: 8, text: 'TUV'},
      { value: 9, text: 'WXYZ'}
    ];
  }

  setNumbers(){
    this.numbers = [];
  }

  addNumber(n){
    this.numbers.push(n);
  }

  handleNumBtnClick(index) {
    this.addNumber(this.buttons[index].value);
    this.props.actions.fetchWords(this.numbers.join(""));
  }

  handleClearBtnClick(){
    this.setNumbers();
    this.props.actions.clearWords();
  }

  render() {
    const buttons = this.buttons;
    const numbers = this.numbers.join("");
    return (
      <div className="container">

        <div className="row">
          <div className="col s12 m8 offset-m2 l6 offset-l3">

            <WordsList words={this.props.words} />
        
            <NumDisplay numbers={numbers} />

            <Keypad buttons={buttons} 
                    numbers={this.numbers} 
                    onNumBtnClick={(i) => this.handleNumBtnClick(i)} 
                    onClearBtnClick={(i) => this.handleClearBtnClick()} 
            />

          </div>
        </div>
      </div>
    )
  }
}



function mapStateToProps(state, ownProps) {
 return {
    words: state.words
  };
} 

function mapDispatchToProps(dispatch) {  
  return {
    actions: bindActionCreators(wordsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);  