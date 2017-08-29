import React, { Component } from 'react';
import '../style/App.css';

export default class GetImageButton extends Component {
  constructor(props){
    super(props)
  }



  render() {
    return (
      <button type="submit" onClick={this.props.formSubmit}>Search!</button>
    );
  }
}
