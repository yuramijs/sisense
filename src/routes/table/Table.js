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
    console.log(this.props.table.getTables.table);
    return (
      <div className="card">
        <div onClick={() => this.sortByName()}>sortByName</div>
        <div onClick={() => this.getTable()}>getTable</div>
        <p>Search</p>
        <input type="text" onChange={this.onChange.bind(this)} />
        Table
        <div>
          {this.props.table.getTables.table && this.props.table.getTables.table.map((item, index) => (
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
