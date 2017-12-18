import React, {Component} from 'react';
import {sortBy} from 'lodash';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Table.css'

import List from './../List';

import {connect} from 'react-redux';

import getTable from '../../actions/getTable';

let count = 10;
let view = 700;

class Table extends Component {
  constructor() {
    super();
    this.state = {
      table: []
    };
  }

  componentDidMount() {
    this.props.getTable();
  }

  getData = () => {
    count += count;
    this.props.getTable(count);
  };

  sortByName = () => {
    this.props.getTable(null);
  };

  onChange = event => {
    const params = event.target.value;
    this.props.getTable(params);
  };

  handleScroll = event => {
    if(event.currentTarget.scrollTop >= view) {
      view += 700;
      console.log('view', view);
      console.log(event.currentTarget.scrollTop);
      this.getData()
    }
  };


  render() {
    const {table} = this.props.table.getTables;

    return (
      <div className="card">
      {this.state.direction}
        <div onClick={() => this.sortByName()}>sortByName</div>
        <h2>Search</h2>
        <input type="text" onChange={this.onChange.bind(this)} />
        <br/>
        <h2>Table</h2>
        <div className={s.table__wrapper} onScroll={event => this.handleScroll(event)}>
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
              <List list={table}/>
            </tbody>
          </table>
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
)(withStyles(s)(Table));
