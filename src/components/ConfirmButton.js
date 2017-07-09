import React from 'react';


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

      if (name != null && typeof name !== "undefined") {
        console.log(name); // output the names as requested
        selectedNames = selectedNames + '\n' + name;
      }
    }
    if (this.props.selectedNames.length > 0) {
      alert(selectedNames);
    } else {
        alert("No names were selected.");
    }

  }

  render() {
    return (
      <button className="confirm" onClick={this.handleConfirmClick}>
        Confirm
      </button>
    );
   }
}

export default ConfirmButton;
