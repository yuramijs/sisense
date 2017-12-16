import React, {Component, Fragment} from 'react';
import {sortBy} from 'lodash';

import {connect} from 'react-redux';

import getTable from '../../actions/getTable';

class Table extends Component {
  constructor() {
    super();
    this.state = {
      table: []
    }
  }

  componentDidMount() {
    this.props.getTable();
  }

  getTable = () => {
    // this.props.getTable();
    this.setState({
      table: this.props.table.getTables.table
    });
  };

  sortByName = () => {
    const data = this.state.table;
    const sortedByName = sortBy(data, [item => item.name]);
    this.setState({
      table: sortedByName
    });
  };

  onChange = event => {
    const params = event.target.value;
    this.props.getTable(params);
  };

  render() {
    return (
      <div className="card">
        <div onClick={() => this.sortByName()}>sortByName</div>
        <div onClick={() => this.getTable()}>getTable</div>
        <p>Search</p>
        <input type="text" onChange={this.onChange.bind(this)} />
        <table className="table">
          <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Date</th>
            <th>String</th>
            <th>Number</th>
          </tr>
          </thead>
          <tbody>
            {this.props.table.getTables.table &&
            this.props.table.getTables.table.map((item, index) => (
              <Fragment key={index}>
                <tr>
                  <td>{item._id}</td>
                  <td>{item.name}</td>
                  <td>Date</td>
                  <td>String</td>
                  <td>Number</td>
                </tr>
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  table: state,
});
const mapDispatchToProps = {
  getTable
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Table);
