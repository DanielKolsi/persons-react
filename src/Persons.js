import React from 'react';

import './Persons.css';

import RecordTable from './components/RecordTable';
import ConfirmButton from './components/ConfirmButton';

import {sortBy} from 'lodash';
import registerServiceWorker from './registerServiceWorker';

var config = require('./config/Config.js');

/*
This is the main component which holds and renders all the other components and
information including RecordTables, ConfirmButton and HTML information string for keeping
track of selected names (records).
*/
class Persons extends React.Component {
  constructor(props) {
    super(props);
    // fetches the data using back-end serving running in localhost port 4000
    // alternatively without the back-end this could be the final third party url from where
    // the JSON person records data is fetched
    //const SERVER_URL = "http://127.0.0.1:4000/api/";

    this.handleSelectedNames = this.handleSelectedNames.bind(this);
    this.state = {data: [], url: config.SERVER_URL, selectedNames: []};
  }

  // this function will be passed "down" to the RecordTable to enable it to always update
  // the correct number of selected names in App's state
  handleSelectedNames(selectedNames) {
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
    // sort by 'name': default sorting order is ASCENDING alphabet order
    var orderedData = sortBy(data, [config.SORTING_ORDER]);

    this.setState({
      data: orderedData
    });
  }

  render() {
    let selectedNames = this.state.selectedNames;
    // default array sorting order is alphabet ascending
    selectedNames.sort();

    let handleSelectedNames = this.handleSelectedNames;
    // contains table records as 'rows'
    let rows = [];
    let button =
    <ConfirmButton selectedNames={selectedNames} />
    ;

    this.state.data.forEach(function (person, index) {
      rows.push(
        <RecordTable
          person={person}
          key={index}
          selectedNames = {selectedNames}
          onSelectedChange={handleSelectedNames}
        />
      );
    });
    let topic =
    <div className="topic"> {selectedNames.length} of {rows.length} selected </div>
    ;
    // topic renders as 'X of Y selected.'
    // just leave some free space to avoid "jerking" when 'X of Y selected' is rendered
    const topicSpace =
    <div>
      <p/>
    </div>
    ;
    // conditional rendering
    if (selectedNames.length > 0) {
      return (

        <div>
          {topic}
          {rows}
          {button}
          <p/>
        </div>
      );
    } return (
      <div>
        {topicSpace}
        {rows}
        {button}
        <p/>
      </div>
    );
  }
}

registerServiceWorker();
export default Persons;
