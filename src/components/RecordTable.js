import React from 'react';


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
			let selectedNames = this.props.selectedNames.slice(); // copy the array

			if (value) {
				selectedNames.push(name); // add the new just selected name to selectedNames
      } else {

				let index = selectedNames.indexOf(name);
				if (index !== -1)  {// name exists in the array!

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
              <td style={{width: "15%", textAlign:"center", backgroundColor: "#D9D9D9"}}
							rowSpan = "2"><input type="checkbox" name={name}
							onChange={this.handleToggle}/></td><td style={{backgroundColor: "#E9E9E9"}}>{name}</td>
            </tr>
            <tr className="email">
              <td style={{backgroundColor: "#FFFFFF"}}>{email}</td>
            </tr>
            <tr className="space">
              <td colSpan="2"></td>
            </tr>
          </tbody>
      </table>

    );
  }
}

export default RecordTable;
