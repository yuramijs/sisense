import React from 'react';
import {sortBy} from 'lodash';

import {connect} from 'react-redux';

import getTable from '../../actions/getTable';

class Table extends React.Component {
  constructor() {
    super();
    this.state = {
      table: []
    }
  }

  getTable = () => {
    this.props.getTable();
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
        Table
        <div>
          {this.state.table && this.state.table.map((item, index) => (
              <div key={index}>{item.name}</div>
          ))
          }
        </div>
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
