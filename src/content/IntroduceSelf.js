import React, {Component} from 'react';

class IntroduceSelf extends Component {
  // constructor(props)
  getInitialState: function(){
    return{userInput: ''};
  },
  handleChange: function(e){
    this.setState({userInput: e.target.value});
  },
  render() {
    return(
      <div className="introduce">
        <label htmlFor=""></label>
        <input type="text" ref="myInput" value={this.state.userInput} onChange={this.handleChange} />
        <div>front-end girl and lucky girl</div>
        <div>hobby</div>
        <div>company</div>
        <div>school</div>
      </div>
    );
  }
}

module.exports = {
  IntroduceSelf
}
