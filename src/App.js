import React from 'react';
import './App.css';

import RecordTable from './components/RecordTable';
import ConfirmButton from './components/ConfirmButton';

import {sortBy} from 'lodash';
import registerServiceWorker from './registerServiceWorker';

/*
  This is the main component which holds and renders all the other components and
  information including RecordTables, ConfirmButton and HTML information string for keeping
  track of selected names (records).
*/
class App extends React.Component {

  constructor(props) {
    super(props);
    // fetches the data using back-end serving running in localhost port 4000
    // alternatively without the back-end this could be the final third party url from where
    // the JSON person records data is fetched
    const SERVER_URL = "http://127.0.0.1:4000/api/";

		this.handleSelectedNames = this.handleSelectedNames.bind(this);
    this.state = {data: [], url: SERVER_URL, selectedNames: []};
  }

	// this function will be passed "down" to the RecordTable to enable it to always update
	// the correct number of selected names in App's state
	handleSelectedNames(selectedNames){
		this.setState({selectedNames: selectedNames});
	}


	/* Fetch the JSON data from the server (GET)
		 If OK, sort the data.
		 Handle possible errors.
	*/
  componentDidMount() {

    fetch(this.state.url)
    .then((response) => {
      return response.json();
    })
    .then((results) => {
        this.processData(results);
    })
    .catch(console.error);
    }

    // sort data in ascending alphabetical order by the name
    processData(data) {
			const SORTING_ORDER = 'name';
      data = sortBy(data, [SORTING_ORDER]); // sort by 'name': default sorting order is ASCENDING alphabet order

      this.setState({
        data: data
      });
    }

  render() {

		let selectedNames = this.state.selectedNames;
		selectedNames.sort(); // default array sorting order is alphabet ascending

		let handleSelectedNames = this.handleSelectedNames;
    let rows = []; // contains table records as 'rows'
    let button = <ConfirmButton selectedNames={selectedNames} />;

    this.state.data.forEach(function(person, index) {

      rows.push(<RecordTable person={person} key={index}
				selectedNames = {selectedNames} onSelectedChange={handleSelectedNames}
				/>);
    });
		let topic = <div className="topic"> {selectedNames.length} of {rows.length} selected </div>; // topic renders as 'X of Y selected.'
		const topicSpace = <div><p></p></div>;  // just leave some free space to avoid "jerking" when 'X of Y selected' is rendered

		if (selectedNames.length > 0) { // conditional rendering
	    return (

								<div>
									{topic}
									{rows}
									{button}
									<p></p>
								</div>
	    );
		}  else return (
									<div>
										{topicSpace}
					          {rows}
					          {button}
										<p></p>
				          </div>
							);
    }
}

registerServiceWorker();
export default App;
