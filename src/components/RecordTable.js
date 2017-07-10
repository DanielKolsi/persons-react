import React from 'react';
import PropTypes from 'prop-types';

class RecordTable extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
  }

  // Toggling the checkbox either selects a name or removes the name from the selected names array
  handleToggle(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({checked: value});
    // copy the array
    let selectedNames = this.props.selectedNames.slice();

    if (value) {
      // add the new just selected name to selectedNames
      selectedNames.push(name);
    } else {
      let index = selectedNames.indexOf(name);
      // name exists in the array!
      if (index !== -1) {
        // Remove the name; in the theoretical case of duplicate full names, the first name is
        // removed. This is not a problem, because only names will be output, i.e. the result
        // looks and is effectively the same in any case. (thus person.id is not required)
        selectedNames.splice(index, 1);
      }
    }
    // lifting state up technique, explained at: https://facebook.github.io/react/docs/lifting-state-up.html
    this.props.onSelectedChange(selectedNames);
  }

  render() {
    let name = this.props.person.name;
    let email = this.props.person.email;

    return (

      <table style={{width: "100%"}}>
        <tbody>
          <tr className="name">
            <td
              style={{width: "15%", textAlign: "center", backgroundColor: "#D9D9D9"}}
              rowSpan = "2">
              <input
                type="checkbox"
                name={name}
                onChange={this.handleToggle}/>
            </td>
            <td style={{backgroundColor: "#E9E9E9"}}>
              {name}
            </td>
          </tr>
          <tr className="email">
            <td style={{backgroundColor: "#FFFFFF"}}>
              {email}
            </td>
          </tr>
          <tr className="space">
            <td colSpan="2"/>
          </tr>
        </tbody>
      </table>

    );
  }
}

RecordTable.propTypes = {
  person: PropTypes.object,
  selectedNames: PropTypes.array,
  onSelectedChange: PropTypes.func
};

export default RecordTable;
