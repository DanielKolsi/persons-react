import React from 'react';
import PropTypes from 'prop-types';

var config = require('../config/Config.js');

//confirms and outputs names from the selected records
class ConfirmButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleConfirmClick = this.handleConfirmClick.bind(this);
  }

  /*
  When the Confirm-button is clicked, selected names are outputed in
  alphabetical ascending order both to the browser console and to the alert window.
  */
  handleConfirmClick() {
    let selectedNames = "";

    for (let i = 0; i < this.props.selectedNames.length; i++) {
      let name = this.props.selectedNames[i];

      if (name !== null && typeof name !== "undefined") {
        console.log(name); // output the names as requested
        selectedNames = selectedNames + '\n' + name;
      }
    }
    if (this.props.selectedNames.length > 0) {
      alert(selectedNames);
    } else {
      alert(config.NO_NAMES_SELECTED);
    }
  }

  render() {
    return (
      <button
        className="confirm"
        onClick={this.handleConfirmClick}>
        Confirm
      </button>
    );
  }
}

ConfirmButton.propTypes = {
  selectedNames: PropTypes.array
};

export default ConfirmButton;
